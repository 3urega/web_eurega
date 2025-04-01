import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Post } from '@/services/blog';
import Image from 'next/image';

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const { title, publishedAt, content, cover, author } = post.attributes;
  
  const publishDate = new Date(publishedAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const coverImage = cover?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${cover.data.attributes.url}`
    : '/images/placeholder-blog.svg';

  const authorName = author?.data?.attributes?.username || 'Anónimo';

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
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </header>
      
      <div className="post-content prose prose-lg max-w-none markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </div>
      
      <style jsx global>{`
        .post-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .post-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .post-content p {
          margin-bottom: 1.25rem;
          line-height: 1.7;
        }
        
        .post-content ul, .post-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        
        .post-content li {
          margin-bottom: 0.5rem;
        }
        
        .post-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          font-style: italic;
          margin: 1.5rem 0;
        }
        
        .post-content pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.375rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .post-content code {
          background-color: #f3f4f6;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        
        .post-content .katex-display {
          margin: 2rem 0;
          overflow-x: auto;
          overflow-y: hidden;
        }
      `}</style>
    </article>
  );
} 