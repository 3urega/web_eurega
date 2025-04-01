/**
 * Servicios para conectar con Strapi CMS
 */

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const API_TIMEOUT = process.env.NEXT_PUBLIC_STRAPI_API_TIMEOUT ? parseInt(process.env.NEXT_PUBLIC_STRAPI_API_TIMEOUT) : 5000;

/**
 * Obtiene datos de la API de Strapi
 * @param endpoint - Endpoint de la API de Strapi (sin /api)
 * @param options - Opciones para el fetch
 * @returns Datos de la API
 */
export async function fetchAPI(
  endpoint: string,
  options: RequestInit = {}
) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    // Agregamos un timeout configurable para evitar esperas muy largas
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
    
    const res = await fetch(`${API_URL}/api/${endpoint}`, {
      ...mergedOptions,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    return data;
  } catch (error: any) {
    // Devolvemos una estructura vacía compatible con lo que esperamos recibir
    return { data: [] };
  }
}

/**
 * Obtiene todos los proyectos
 */
export async function getProjects() {
  try {
    const data = await fetchAPI('projects?populate=*');
    return data.data || [];
  } catch (error) {
    return [];
  }
}

/**
 * Obtiene todos los servicios
 */
export async function getServices() {
  try {
    const data = await fetchAPI('services?populate=*');
    return data.data || [];
  } catch (error) {
    return [];
  }
}

/**
 * Envía un formulario de contacto
 */
export async function sendContactForm(formData: any) {
  try {
    return await fetchAPI('contact', {
      method: 'POST',
      body: JSON.stringify({ data: formData }),
    });
  } catch (error) {
    throw error; // En este caso sí queremos propagar el error para manejarlo en el UI
  }
} 