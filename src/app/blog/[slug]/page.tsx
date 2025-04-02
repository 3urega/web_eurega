import React from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import PostContent from '@/components/blog/PostContent';
import { getPostBySlug, getPosts } from '@/services/blog';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';

// Tipo simplificado para los parámetros de ruta
export interface Params {
  slug: string;
}

// Función para generar metadatos
export async function generateMetadata({ params }: { params: Params }) {
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

// Generar rutas estáticas para la compilación
export async function generateStaticParams() {
  const posts = await getPosts(100);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Página principal
export default async function BlogPostPage({ params }: { params: Params }) {
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