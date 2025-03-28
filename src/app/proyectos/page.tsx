import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import { getProjects } from '@/services/strapi';
import ProjectsList from '@/components/sections/ProjectsList';
import Section from '@/components/ui/Section';

// Las categorías que mostramos son fijas para simplificar
// Idealmente, se extraerían dinámicamente de los proyectos
const PROJECT_CATEGORIES = ['Web App', 'E-commerce', 'Reservas', 'Móvil', 'Marketing'];

export default async function ProjectsPage() {
  // Obtenemos todos los proyectos en el servidor
  const projects = await getProjects();
  
  return (
    <MainLayout>
      <PageHeader 
        title="Nuestros Proyectos" 
        description="Explora nuestro portafolio de trabajos destacados"
      />
      
      <Section>
        {/* Pasamos los proyectos y categorías al componente cliente que se encargará del filtrado */}
        <ProjectsList 
          initialProjects={projects} 
          categories={PROJECT_CATEGORIES}
        />
      </Section>
    </MainLayout>
  );
} 