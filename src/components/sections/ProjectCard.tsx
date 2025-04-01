"use client";

import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ProjectCardProps {
  id: string;
  title: string;
  description?: string;
  category?: string;
  imageUrl?: string;
  slug: string;
  technologies?: string[];
  showDetails?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  category,
  imageUrl,
  slug,
  technologies = [],
  showDetails = true
}: ProjectCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Imagen del proyecto con overlay */}
      <div className="relative w-full aspect-video overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              fill="currentColor" 
              className="text-gray-400"
              viewBox="0 0 16 16"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
            </svg>
          </div>
        )}
        
        {/* Categoría (badge) */}
        {category && (
          <span className="absolute top-3 right-3 bg-purple-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      
      {/* Contenido */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          {title}
        </h3>
        
        {description && showDetails && (
          <p className="text-gray-800 mb-4 line-clamp-3 font-medium">
            {description}
          </p>
        )}
        
        {/* Tecnologías usadas */}
        {technologies && technologies.length > 0 && showDetails && (
          <div className="mt-auto pt-4 pb-2">
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <span 
                  key={`${id}-tech-${index}`}
                  className="bg-gray-200 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Botón de acción */}
        <div className="mt-auto pt-4">
          <Link href={`/proyectos/${slug}`} passHref>
            <Button variant="outline" className="w-full">
              Ver proyecto
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
} 