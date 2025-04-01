import React from 'react';
import ProjectCard from './ProjectCard';
import Section from '../ui/Section';
import { getProjects } from '@/services/strapi';

// Definición de tipos
interface Project {
  id: string;
  title: string;
  description?: string;
  slug: string;
  category?: string;
  featured?: boolean;
  imageUrl?: string;
  technologies?: string[];
}

interface ProjectsGridProps {
  columns?: 1 | 2 | 3 | 4;
  showDetails?: boolean;
  featured?: boolean;
  limit?: number;
  category?: string;
  title?: string;
  description?: string;
}

// Mapeo de columnas a clases de grid
const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

/**
 * Componente para mostrar una rejilla de proyectos
 */
export default async function ProjectsGrid({ 
  columns = 3, 
  showDetails = true,
  featured = false,
  limit = 0,
  category = '',
  title = 'Proyectos Destacados',
  description = 'Algunas de nuestras mejores creaciones'
}: ProjectsGridProps) {
  // Obtener proyectos desde Strapi
  let projects = await getProjects();
  
  // Filtrar proyectos
  let filteredProjects = projects;
  
  // Filtrar por featured si es necesario
  if (featured) {
    filteredProjects = filteredProjects.filter(project => project.featured);
  }
  
  // Filtrar por categoría si es necesario
  if (category) {
    filteredProjects = filteredProjects.filter(
      project => project.category && project.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Limitar el número de proyectos si es necesario
  if (limit > 0 && filteredProjects.length > limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <Section
      title={title}
      subtitle={description}
    >
      {filteredProjects.length > 0 ? (
        <div className={`grid gap-6 sm:gap-8 ${gridCols[columns]}`}>
          {filteredProjects.map((project: Project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              imageUrl={project.imageUrl}
              slug={project.slug}
              technologies={project.technologies}
              showDetails={showDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-600">No se encontraron proyectos que coincidan con los criterios.</p>
        </div>
      )}
    </Section>
  );
} 