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
    console.error('Error en la petición:', error);
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
    const strapiServices = data.data || [];
    
    // Servicios de IA temporales hasta que se agreguen en Strapi
    const iaServices = [
      {
        id: 'integracion-ia',
        slug: 'integracion-ia',
        title: 'Integración de Agentes de IA',
        description: 'Incorporamos agentes inteligentes en tus sistemas para automatizar procesos, mejorar la eficiencia y optimizar la toma de decisiones.',
        features: [
          'Automatización de procesos con IA',
          'Agentes virtuales personalizados',
          'Optimización de flujos de trabajo',
          'Implementación de modelos de IA',
          'Integración con sistemas existentes'
        ]
      },
      {
        id: 'desarrollo-ia',
        slug: 'desarrollo-ia',
        title: 'Desarrollo de proyectos con IA desde cero',
        description: 'Si tienes una idea innovadora, te ayudamos a convertirla en un producto funcional basado en IA.',
        features: [
          'Análisis y diseño de soluciones de IA',
          'Desarrollo de aplicaciones con IA integrada',
          'Implementación de algoritmos de machine learning',
          'Pruebas y validación de modelos',
          'Despliegue de soluciones en producción'
        ]
      },
      {
        id: 'chatbots-ia',
        slug: 'chatbots-ia',
        title: 'Chatbots y asistentes de IA',
        description: 'Mejora la experiencia de tus usuarios con chats impulsados por IA. Integramos chatbots en tu web o plataforma.',
        features: [
          'Chatbots con procesamiento de lenguaje natural',
          'Asistentes virtuales personalizados',
          'Integración con plataformas de mensajería',
          'Análisis de interacciones y mejora continua',
          'Soporte multilenguaje y personalizable'
        ]
      },
      {
        id: 'web-scraping-ia',
        slug: 'web-scraping-ia',
        title: 'Web Scraping con IA',
        description: 'Captura, procesa y adapta contenido de manera inteligente con nuestras soluciones de web scraping basadas en IA.',
        features: [
          'Extracción automatizada de datos web',
          'Análisis de contenido con IA',
          'Monitoreo de competencia y mercado',
          'Automatización de recopilación de información',
          'Procesamiento de datos estructurados y no estructurados'
        ]
      }
    ];
    
    // Verificar si ya existen estos servicios en Strapi para evitar duplicados
    const existingIASlugs = strapiServices.map((service: any) => service.slug);
    const newIAServices = iaServices.filter(service => !existingIASlugs.includes(service.slug));
    
    // Combinar servicios de Strapi con los temporales de IA
    return [...strapiServices, ...newIAServices];
  } catch (error) {
    // Si hay un error, devolver al menos los servicios de IA temporales
    return [
      {
        id: 'integracion-ia',
        slug: 'integracion-ia',
        title: 'Integración de Agentes de IA',
        description: 'Incorporamos agentes inteligentes en tus sistemas para automatizar procesos, mejorar la eficiencia y optimizar la toma de decisiones.',
        features: [
          'Automatización de procesos con IA',
          'Agentes virtuales personalizados',
          'Optimización de flujos de trabajo',
          'Implementación de modelos de IA',
          'Integración con sistemas existentes'
        ]
      },
      {
        id: 'desarrollo-ia',
        slug: 'desarrollo-ia',
        title: 'Desarrollo de proyectos con IA desde cero',
        description: 'Si tienes una idea innovadora, te ayudamos a convertirla en un producto funcional basado en IA.',
        features: [
          'Análisis y diseño de soluciones de IA',
          'Desarrollo de aplicaciones con IA integrada',
          'Implementación de algoritmos de machine learning',
          'Pruebas y validación de modelos',
          'Despliegue de soluciones en producción'
        ]
      },
      {
        id: 'chatbots-ia',
        slug: 'chatbots-ia',
        title: 'Chatbots y asistentes de IA',
        description: 'Mejora la experiencia de tus usuarios con chats impulsados por IA. Integramos chatbots en tu web o plataforma.',
        features: [
          'Chatbots con procesamiento de lenguaje natural',
          'Asistentes virtuales personalizados',
          'Integración con plataformas de mensajería',
          'Análisis de interacciones y mejora continua',
          'Soporte multilenguaje y personalizable'
        ]
      },
      {
        id: 'web-scraping-ia',
        slug: 'web-scraping-ia',
        title: 'Web Scraping con IA',
        description: 'Captura, procesa y adapta contenido de manera inteligente con nuestras soluciones de web scraping basadas en IA.',
        features: [
          'Extracción automatizada de datos web',
          'Análisis de contenido con IA',
          'Monitoreo de competencia y mercado',
          'Automatización de recopilación de información',
          'Procesamiento de datos estructurados y no estructurados'
        ]
      }
    ];
  }
}

/**
 * Envía un formulario de contacto
 */
export async function sendContactForm(formData: any) {
  try {
    // Enviamos los datos en el formato que espera Strapi
    return await fetchAPI('contact', {
      method: 'POST',
      body: JSON.stringify({ data: formData }),
    });
  } catch (error) {
    throw error; // En este caso sí queremos propagar el error para manejarlo en el UI
  }
} 