import { fetchAPI } from './strapi';

// Actualizada para reflejar la estructura real de la API
export interface Post {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  summary: string;
  content: string | null;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: any | null;
}

export async function getPosts(limit = 10) {
  try {
    const data = await fetchAPI(
      `posts?pagination[limit]=${limit}&sort=publishedAt:desc&populate=*`
    );
    
    // Log detallado de la respuesta
    console.log('=== DATOS RECIBIDOS DE LA API DE POSTS ===');
    console.log(JSON.stringify(data, null, 2));
    console.log('=== FIN DE DATOS ===');
    
    return data.data as Post[];
  } catch (error) {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const data = await fetchAPI(
      `posts?filters[slug][$eq]=${slug}&populate=*`
    );
    
    if (data.data && data.data.length > 0) {
      return data.data[0] as Post;
    }
    
    throw new Error(`Post with slug ${slug} not found`);
  } catch (error) {
    throw error;
  }
}

export async function getCategories() {
  try {
    const data = await fetchAPI('categories');
    return data.data;
  } catch (error) {
    return [];
  }
} 