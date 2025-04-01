import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import PostsGrid from '@/components/sections/PostsGrid';
import Section from '@/components/ui/Section';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Blog | Eurega',
  description: 'Artículos, noticias y tutoriales sobre desarrollo web, programación y tecnología.',
};

export default function BlogPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Blog"
        description="Artículos, noticias y tutoriales sobre desarrollo web, programación y tecnología"
      />
      
      <Section background="bg-gray-50">
        <Container>
          <PostsGrid limit={12} />
        </Container>
      </Section>
    </MainLayout>
  );
} 