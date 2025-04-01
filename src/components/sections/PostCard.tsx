import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import { Post } from '@/services/blog';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { title, slug, summary, publishedAt, cover } = post.attributes;
  
  const coverImage = cover?.data?.attributes?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cover.data.attributes.url}`
    : '/images/placeholder-blog.svg';
  
  const publishDate = new Date(publishedAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="text-sm text-gray-500 mb-2">
          {publishDate}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {summary.length > 150 ? `${summary.substring(0, 150)}...` : summary}
        </p>
        
        <Link 
          href={`/blog/${slug}`}
          className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          Leer más →
        </Link>
      </div>
    </Card>
  );
} 