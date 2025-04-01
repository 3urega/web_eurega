import React from 'react';
import { getPosts, Post } from '@/services/blog';
import PostCard from './PostCard';
import Section from '../ui/Section';

interface PostsGridProps {
  limit?: number;
  title?: string;
  featured?: boolean;
}

export default async function PostsGrid({ limit = 6, title = "Blog", featured = false }: PostsGridProps) {
  const posts = await getPosts(limit);
  
  // Si solo queremos posts destacados
  const filteredPosts = featured 
    ? posts.filter(post => post.attributes.featured) 
    : posts;

  return (
    <Section title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p className="text-gray-500">No hay posts disponibles.</p>
          </div>
        )}
      </div>
    </Section>
  );
} 