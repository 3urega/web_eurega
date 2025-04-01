# Strapi + Next.js: Guía Rápida

Este documento explica de forma clara y sencilla cómo funciona la arquitectura Strapi (backend) + Next.js (frontend) y cómo visualizar el contenido que creas en Strapi dentro de tu aplicación Next.js.

## 1. ¿Qué es cada cosa?

### Strapi (Backend)
- **Es un CMS Headless**: Un sistema para gestionar contenido sin frontend.
- **Funciona como una base de datos con interfaz gráfica**: Te permite crear tipos de contenido y añadir entradas fácilmente.
- **Expone una API REST**: Proporciona URLs para acceder a tu contenido en formato JSON.

### Next.js (Frontend)
- **Es un framework de React para construir interfaces**: Muestra tu contenido de forma bonita.
- **Actúa como consumidor de la API de Strapi**: Pide los datos al backend y los muestra.
- **Puede pre-renderizar el contenido**: Lo que mejora el rendimiento y SEO.

## 2. Flujo de Trabajo

```
+------------+                  +------------+
|            |  1. Petición HTTP |            |
|  Next.js   +------------------>  Strapi    |
|            |                  |            |
|            |  2. Respuesta JSON|            |
|  (Cliente) <------------------+  (Servidor) |
|            |                  |            |
+------------+                  +------------+
     |                                 ^
     |                                 |
     v                                 |
+------------+                  +------------+
|            |                  |            |
|  Usuario   |                  | Editor de  |
|            |                  | Contenido  |
+------------+                  +------------+
```

## 3. Paso a Paso: Creación y Visualización de Contenido

### En Strapi (Backend)

1. **Crear un Tipo de Contenido**:
   - Accede al panel de administración: `http://localhost:1337/admin`
   - Ve a Content-Type Builder → "Create new collection type"
   - Define campos (título, contenido, imágenes, etc.)
   - Guarda el tipo de contenido

2. **Añadir Contenido**:
   - Ve a Content Manager → Selecciona tu tipo de contenido
   - Haz clic en "Create new entry"
   - Rellena los campos y haz clic en "Save"
   - **IMPORTANTE**: Haz clic en "Publish" para que sea visible

3. **Configurar Permisos**:
   - Ve a Settings → Users & Permissions Plugin → Roles
   - Edita el rol "Public"
   - Busca tu tipo de contenido y habilita "find" y "findOne"
   - Guarda los cambios

4. **Verifica la API**:
   - Abre en tu navegador: `http://localhost:1337/api/nombre-tipo-contenido`
   - Deberías ver un JSON con tu contenido
   - Si no aparece nada, revisa los permisos y si has publicado el contenido

### En Next.js (Frontend)

1. **Crear Servicio para Conectar con Strapi**:

```typescript
// src/services/strapi.ts
export async function fetchAPI(endpoint: string) {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const res = await fetch(`${apiUrl}/api/${endpoint}`);
  
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  
  const data = await res.json();
  return data;
}

// src/services/miContenido.ts
export async function getContenido() {
  const data = await fetchAPI('nombre-tipo-contenido?populate=*');
  return data.data; // Extraemos el array de datos
}

export async function getContenidoPorId(id: string) {
  const data = await fetchAPI(`nombre-tipo-contenido/${id}?populate=*`);
  return data.data; // Extraemos un solo objeto
}
```

2. **Crear Componente para Mostrar el Contenido**:

```tsx
// src/components/ListaContenido.tsx
import { getContenido } from '@/services/miContenido';

export default async function ListaContenido() {
  // Obtener datos de Strapi
  const items = await getContenido();
  
  return (
    <div>
      <h1>Mi Contenido</h1>
      
      {items.length === 0 ? (
        <p>No hay contenido disponible.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">
                {item.attributes.titulo}
              </h2>
              <p>{item.attributes.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

3. **Usar el Componente en una Página**:

```tsx
// src/app/mi-contenido/page.tsx
import ListaContenido from '@/components/ListaContenido';

export default function MiContenidoPage() {
  return (
    <main className="container mx-auto py-8">
      <ListaContenido />
    </main>
  );
}
```

## 4. Estructura de Datos de Strapi

Cuando llamas a la API de Strapi, **siempre** devuelve datos con esta estructura:

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "titulo": "Mi primer artículo",
        "contenido": "Este es el contenido...",
        "createdAt": "2023-04-01T10:00:00.000Z",
        "updatedAt": "2023-04-01T10:00:00.000Z",
        "publishedAt": "2023-04-01T10:00:00.000Z"
      }
    },
    // Más elementos...
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

**IMPORTANTE**: Siempre accede a tus datos como:
- `data[0].attributes.nombreCampo` (para listas)
- `data.attributes.nombreCampo` (para un solo elemento)

## 5. Parámetros Útiles para la API de Strapi

- **Paginación**:
  ```
  ?pagination[page]=1&pagination[pageSize]=10
  ```

- **Ordenar**:
  ```
  ?sort=createdAt:desc
  ```

- **Filtrar**:
  ```
  ?filters[destacado][$eq]=true
  ```

- **Relaciones**:
  ```
  ?populate=autor,categorias
  ```

- **Combinados**:
  ```
  ?sort=createdAt:desc&pagination[pageSize]=5&populate=*
  ```

## 6. Solución de Problemas Comunes

1. **No veo mis datos en la web**:
   - Verifica que puedes acceder a `http://localhost:1337/api/tu-contenido`
   - Revisa la configuración de CORS en Strapi
   - Comprueba que la URL en `.env.local` es correcta
   - Verifica que estás extrayendo los datos correctamente de la estructura

2. **No veo mis datos en la API de Strapi**:
   - ¿Has publicado el contenido? (No solo guardado)
   - ¿Has configurado los permisos correctamente?
   - ¿El servidor de Strapi está funcionando?

3. **Errores al obtener relaciones**:
   - Asegúrate de usar `?populate=*` o especificar las relaciones
   - Verifica que las relaciones están correctamente configuradas en Strapi

## 7. Ejemplos Prácticos

### Obtener Posts para un Blog

```typescript
// src/services/blog.ts
export async function getPosts(limit = 10) {
  const data = await fetchAPI(
    `posts?populate=autor,categorias,portada&pagination[limit]=${limit}&sort=publicadoEn:desc`
  );
  return data.data;
}

// src/components/BlogList.tsx
import { getPosts } from '@/services/blog';
import Image from 'next/image';

export default async function BlogList() {
  const posts = await getPosts(5);
  
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id} className="mb-8">
          <h2>{post.attributes.titulo}</h2>
          
          {post.attributes.portada?.data && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.portada.data.attributes.url}`}
              alt={post.attributes.titulo}
              width={800}
              height={400}
            />
          )}
          
          <p>{post.attributes.resumen}</p>
          
          <div>
            Autor: {post.attributes.autor?.data?.attributes?.nombre || 'Anónimo'}
          </div>
        </article>
      ))}
    </div>
  );
}
```

## 8. Consejos Finales

1. **Estructura de proyecto recomendada**:
   - `/src/services/`: Funciones para conectar con Strapi
   - `/src/components/`: Componentes reutilizables
   - `/src/app/`: Páginas de Next.js (App Router)

2. **Manejo de errores**:
   - Siempre incluye manejo de errores al hacer fetch
   - Proporciona estados de carga y error en la UI

3. **Optimización**:
   - Usa ISR (Incremental Static Regeneration) cuando sea posible
   - Solicita solo los campos que necesitas con `?fields[0]=titulo&fields[1]=resumen`

4. **Seguridad**:
   - No expongas datos sensibles en el frontend
   - Usa un proxy para peticiones que requieran autenticación

---

Con este documento deberías entender perfectamente cómo crear contenido en Strapi y visualizarlo en tu aplicación Next.js. Si tienes dudas específicas, revisa la documentación oficial de [Strapi](https://docs.strapi.io) y [Next.js](https://nextjs.org/docs). 