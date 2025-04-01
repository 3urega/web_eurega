import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getProjects } from '@/services/strapi';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  
  // Obtener todos los proyectos
  const projects = await getProjects();
  
  // Encontrar el proyecto por slug
  const project = projects.find(
    (p: any) => p.slug === slug
  );
  
  // Si no se encuentra el proyecto, mostrar la página 404
  if (!project) {
    notFound();
  }
  
  const { 
    title, 
    description, 
    imageUrl,
    category,
    technologies 
  } = project;
  
  return (
    <MainLayout>
      <PageHeader 
        title={title}
        description={description}
      />
      
      <Section>
        <Container>
          {/* Imagen principal */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            {imageUrl ? (
              <div className="relative w-full aspect-video">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            ) : (
              <div className="bg-gray-200 w-full aspect-video flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="96" 
                  height="96" 
                  fill="currentColor" 
                  className="text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </svg>
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Contenido principal */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Sobre el proyecto</h2>
              <div className="prose prose-lg max-w-none">
                <p>{description}</p>
                
                {/* Contenido adicional - en una implementación real vendría de Strapi */}
                <p>
                  Este proyecto fue desarrollado para satisfacer las necesidades específicas del cliente, 
                  implementando soluciones innovadoras y utilizando las últimas tecnologías del mercado.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Desafíos y soluciones</h3>
                <p>
                  Nos enfrentamos a diversos desafíos durante el desarrollo de este proyecto, 
                  pero gracias a nuestra experiencia y metodología ágil, pudimos superarlos eficazmente.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Resultados</h3>
                <p>
                  El cliente quedó completamente satisfecho con el resultado final, logrando 
                  mejorar significativamente sus métricas de negocio y la experiencia de sus usuarios.
                </p>
              </div>
            </div>
            
            {/* Sidebar con información adicional */}
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              {category && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Categoría</h3>
                  <span className="inline-block bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {category}
                  </span>
                </div>
              )}
              
              {technologies && technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">¿Interesado en un proyecto similar?</h3>
                <p className="text-gray-600 mb-4">
                  Contáctanos para discutir cómo podemos ayudarte con tu próximo proyecto.
                </p>
                <Link href="/contacto" passHref>
                  <Button className="w-full">Contactar</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
} 