import React from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import PostContent from '@/components/blog/PostContent';
import { getPostBySlug, getPosts } from '@/services/blog';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: `${post.title} | Blog Eurega`,
      description: post.summary,
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
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getPostBySlug(params.slug);
    
    return (
      <MainLayout>
        <PageHeader 
          title={post.title}
          description={post.summary || ""}
        />
        <Section spacing="lg" background="bg-white">
          <Container size="md">
            <PostContent post={post} />
          </Container>
        </Section>
      </MainLayout>
    );
  } catch (error) {
    notFound();
  }
} 