import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProjectsGrid from '@/components/sections/ProjectsGrid';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      
      {/* Sección de Servicios */}
      <ServicesGrid 
        title="Nuestros Servicios" 
        description="Soluciones digitales personalizadas para hacer crecer tu negocio" 
        featured={true}
      />
      
      {/* Sección de Proyectos Destacados */}
      <ProjectsGrid 
        title="Proyectos Destacados" 
        description="Algunos de nuestros trabajos más recientes" 
        featured={true}
        limit={3}
      />
      
      {/* Aquí se añadirán más secciones como Testimonios, Contacto, etc. */}
    </MainLayout>
  );
}
