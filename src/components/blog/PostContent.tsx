"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Post } from '@/services/blog';
import Image from 'next/image';
import './post-content.css';

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const { title, publishedAt, content, cover } = post;
  
  const publishDate = new Date(publishedAt || Date.now()).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const coverImage = cover && cover.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cover.url}`
    : '/images/placeholder-blog.svg';

  // No hay información de autor en la estructura actual
  const authorName = 'Anónimo';

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span className="mr-4">Por {authorName}</span>
          <span>{publishDate}</span>
        </div>
        
        <div className="relative w-full h-80 mb-8">
          <Image
            src={coverImage}
            alt={title || 'Imagen del post'}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </header>
      
      <div className="post-content prose prose-lg max-w-none markdown-content">
        {content ? (
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-500">Este post no tiene contenido.</p>
        )}
      </div>
    </article>
  );
} 