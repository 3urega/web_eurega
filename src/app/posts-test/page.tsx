import React from 'react';
import { Post } from '@/services/blog';

async function getPosts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
    const endpoint = 'posts';
    const params = 'populate=*';
    const fullUrl = `${apiUrl}/api/${endpoint}${params ? '?' + params : ''}`;
    
    const res = await fetch(fullUrl, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    return data.data || [];
  } catch (error) {
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
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post: any) => (
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