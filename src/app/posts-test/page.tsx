import React from 'react';

async function getPosts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
    const endpoint = 'posts';
    const params = 'populate=*';
    const fullUrl = `${apiUrl}/api/${endpoint}?${params}`;
    
    console.log('🔍 Fetching posts from Strapi');
    console.log('📌 API URL:', apiUrl);
    console.log('📌 Endpoint:', endpoint);
    console.log('📌 Parameters:', params);
    console.log('📌 Full URL:', fullUrl);
    
    const res = await fetch(fullUrl, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('📊 Response status:', res.status, res.statusText);
    
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    console.log('✅ Data received:', {
      meta: data.meta,
      itemsCount: data.data?.length || 0,
      firstItem: data.data && data.data.length > 0 ? {
        id: data.data[0].id,
        attributes: Object.keys(data.data[0].attributes)
      } : 'No items'
    });
    
    return data.data || [];
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return [];
  }
}

export default async function PostsTestPage() {
  const posts = await getPosts();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      
      {posts.length === 0 ? (
        <div>
          <p className="text-red-500 font-bold">No se encontraron posts. Verifica la conexión con Strapi.</p>
          <p className="mt-4">Posibles razones:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Strapi no está en ejecución (verifica que http://localhost:1337/admin funcione)</li>
            <li>No has creado posts o no están publicados</li>
            <li>Los permisos no están configurados (revisa Settings → Users & Permissions → Public)</li>
            <li>La URL de Strapi es incorrecta (revisa .env.local)</li>
          </ul>
          <p className="mt-4 font-bold">Revisa la consola del servidor para ver los logs de la petición</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map(post => (
            <div key={post.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">{post.attributes.title}</h2>
              <p className="mt-2 text-gray-600">{post.attributes.summary}</p>
              <div className="mt-4">{post.attributes.content}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Diagnóstico</h2>
        <p>Para solucionar problemas con Strapi:</p>
        <ol className="list-decimal pl-6 mt-2">
          <li>Verifica que Strapi está funcionando: <code>http://localhost:1337/admin</code></li>
          <li>Comprueba si la API devuelve datos: <code>http://localhost:1337/api/posts</code></li>
          <li>Configura permisos: Settings → Users & Permissions → Roles → Public → Posts → find/findOne</li>
          <li>Asegúrate de que el contenido está publicado (no solo guardado)</li>
        </ol>
      </div>
    </div>
  );
} 