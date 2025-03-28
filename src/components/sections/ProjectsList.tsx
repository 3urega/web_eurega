"use client";

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';

interface ProjectAttributes {
  title: string;
  description?: string;
  slug: string;
  category?: string;
  featured?: boolean;
  imageUrl?: string;
  technologies?: string[];
}

interface Project {
  id: string;
  attributes: ProjectAttributes;
}

interface ProjectsListProps {
  initialProjects: Project[];
  categories: string[];
}

export default function ProjectsList({ 
  initialProjects, 
  categories 
}: ProjectsListProps) {
  const [activeCategory, setActiveCategory] = useState('');
  
  // Filtrar proyectos por categoría seleccionada
  const filteredProjects = activeCategory 
    ? initialProjects.filter(project => project.attributes.category === activeCategory)
    : initialProjects;
  
  return (
    <div>
      {/* Filtros */}
      <ProjectsFilter 
        categories={categories}
        onFilterChange={setActiveCategory}
        activeCategory={activeCategory}
      />
      
      {/* Mensaje si no hay proyectos */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-600">No se encontraron proyectos en esta categoría.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.attributes.title}
              description={project.attributes.description}
              category={project.attributes.category}
              imageUrl={project.attributes.imageUrl}
              slug={project.attributes.slug}
              technologies={project.attributes.technologies}
              showDetails={true}
            />
          ))}
        </div>
      )}
    </div>
  );
} 