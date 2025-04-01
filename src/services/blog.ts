import { fetchAPI } from './strapi';

export interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    summary: string;
    content: string;
    publishedAt: string;
    featured: boolean;
    cover: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
          alternativeText: string;
        };
      };
    };
    categories: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          slug: string;
        };
      }>;
    };
    author: {
      data: {
        attributes: {
          username: string;
          email: string;
        };
      };
    };
  };
}

export async function getPosts(limit = 10) {
  try {
    const data = await fetchAPI(
      `posts?populate=cover,categories,author&pagination[limit]=${limit}&sort=publishedAt:desc`
    );
    return data.data as Post[];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const data = await fetchAPI(
      `posts?filters[slug][$eq]=${slug}&populate=cover,categories,author`
    );
    
    if (data.data && data.data.length > 0) {
      return data.data[0] as Post;
    }
    
    throw new Error(`Post with slug ${slug} not found`);
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    throw error;
  }
}

export async function getCategories() {
  try {
    const data = await fetchAPI('categories');
    return data.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
} 