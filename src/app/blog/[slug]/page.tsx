import React from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import PostContent from '@/components/blog/PostContent';
import { getPostBySlug, getPosts } from '@/services/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: `${post.attributes.title} | Blog Eurega`,
      description: post.attributes.summary,
    };
  } catch (error) {
    return {
      title: 'Post no encontrado | Blog Eurega',
      description: 'El post que buscas no existe o ha sido eliminado.',
    };
  }
}

export async function generateStaticParams() {
  const posts = await getPosts(100);
  return posts.map((post) => ({
    slug: post.attributes.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getPostBySlug(params.slug);
    
    return (
      <main>
        <Section spacing="lg" background="bg-white">
          <Container size="md">
            <PostContent post={post} />
          </Container>
        </Section>
      </main>
    );
  } catch (error) {
    notFound();
  }
} 