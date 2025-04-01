"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';

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

interface ProjectsListProps {
  initialProjects: Project[];
  categories: string[];
}

export default function ProjectsList({ 
  initialProjects, 
  categories 
}: ProjectsListProps) {
  const [activeCategory, setActiveCategory] = useState('todos');
  
  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = activeCategory === 'todos'
    ? initialProjects
    : initialProjects.filter(project => 
        project.category && project.category.toLowerCase() === activeCategory.toLowerCase()
      );
  
  return (
    <div>
      {/* Filtro de categorías */}
      <ProjectsFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      {/* Lista de proyectos */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 bg-gray-100 rounded-lg mt-8">
          <p className="text-gray-600">No se encontraron proyectos en esta categoría.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              imageUrl={project.imageUrl}
              slug={project.slug}
              technologies={project.technologies}
              showDetails={true}
            />
          ))}
        </div>
      )}
    </div>
  );
} 