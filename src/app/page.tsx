import React from 'react';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import AIServicesSection from '@/components/sections/AIServicesSection';
import AIServicesDetailedSection from '@/components/sections/AIServicesDetailedSection';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import ContactSection from '@/components/sections/ContactSection';
import PostsGrid from '@/components/sections/PostsGrid';

// Metadatos específicos para la página de inicio
export const metadata: Metadata = {
  title: 'Eurega - Expertos en Soluciones de Inteligencia Artificial para Empresas',
  description: 'Potencia tu negocio con nuestras soluciones de IA: agentes inteligentes, chatbots avanzados, automatización de procesos y web scraping para obtener ventaja competitiva.',
  alternates: {
    canonical: 'https://eurega.com',
  },
};

// Servicios de ejemplo para el formulario de contacto
const exampleServices = [
  { id: 'web', name: 'Desarrollo Web' },
  { id: 'app', name: 'Aplicaciones Móviles' },
  { id: 'consult', name: 'Consultoría Técnica' },
  { id: 'ai', name: 'Inteligencia Artificial' },
];

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      
      {/* Sección de Servicios de IA */}
      <AIServicesSection />
      
      {/* Sección detallada de Servicios de IA */}
      <AIServicesDetailedSection showHeaderAndFooter={false} />
      
      {/* Sección de Proyectos Destacados - Temporalmente desactivada
      <ProjectsGrid 
        title="Proyectos Destacados" 
        description="Algunos de nuestros trabajos más recientes" 
        featured={true}
        limit={3}
      />
      */}
      
      {/* Sección de Blog - Temporalmente desactivada
      <PostsGrid 
        title="Nuestro Blog" 
        limit={3} 
        featured={true} 
      />
      */}
      
      {/* Sección de Contacto */}
      <ContactSection 
        title="Hablemos de tu proyecto"
        description="Estamos listos para ayudarte a llevar tu idea al siguiente nivel. Cuéntanos lo que necesitas y te responderemos a la brevedad."
        services={exampleServices}
      />
    </MainLayout>
  );
}
