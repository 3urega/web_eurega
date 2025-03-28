import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import ContactSection from '@/components/sections/ContactSection';

// Servicios de ejemplo para el formulario de contacto
const exampleServices = [
  { id: 'web', name: 'Desarrollo Web' },
  { id: 'app', name: 'Aplicaciones Móviles' },
  { id: 'consult', name: 'Consultoría Técnica' },
];

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
      
      {/* Sección de Contacto */}
      <ContactSection 
        title="Hablemos de tu proyecto"
        description="Estamos listos para ayudarte a llevar tu idea al siguiente nivel. Cuéntanos lo que necesitas y te responderemos a la brevedad."
        services={exampleServices}
      />
    </MainLayout>
  );
}
