import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import { Post } from '@/services/blog';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  // Verificar si post existe
  if (!post) {
    return (
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="p-6">
          <p className="text-red-500">Error: Datos de post incompletos</p>
        </div>
      </Card>
    );
  }
  
  const { title, slug, summary, publishedAt, cover } = post;
  
  const coverImage = cover
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cover.url}`
    : '/images/placeholder-blog.svg';
  
  const publishDate = new Date(publishedAt || Date.now()).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={coverImage}
          alt={title || 'Post sin título'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="text-sm text-gray-500 mb-2">
          {publishDate}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title || 'Sin título'}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {summary ? (summary.length > 150 ? `${summary.substring(0, 150)}...` : summary) : 'Sin descripción'}
        </p>
        
        <Link 
          href={`/blog/${slug || 'post'}`}
          className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          Leer más →
        </Link>
      </div>
    </Card>
  );
} 