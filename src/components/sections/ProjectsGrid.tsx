import { getProjects } from '@/services/strapi';
import ProjectCard from './ProjectCard';
import Section from '../ui/Section';

// Definir la interfaz para los atributos del proyecto
interface ProjectAttributes {
  title: string;
  description?: string;
  slug: string;
  category?: string;
  featured?: boolean;
  imageUrl?: string;
  technologies?: string[];
}

// Definir la interfaz para un proyecto
interface Project {
  id: string;
  attributes: ProjectAttributes;
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

// Placeholder para proyectos mientras Strapi no esté configurado o cuando hay errores
const placeholderProjects: Project[] = [
  {
    id: '1',
    attributes: {
      title: 'E-commerce para empresa textil',
      description: 'Diseño y desarrollo de una tienda online completa con gestión de productos, carrito de compra y pasarela de pago.',
      slug: 'e-commerce-textil',
      category: 'E-commerce',
      featured: true,
      imageUrl: '/images/placeholder-project1.svg',
      technologies: ['Next.js', 'Strapi', 'Stripe', 'TailwindCSS']
    }
  },
  {
    id: '2',
    attributes: {
      title: 'Aplicación de gestión para inmobiliaria',
      description: 'Sistema integral para gestión de propiedades, clientes y transacciones inmobiliarias con panel de administración.',
      slug: 'gestion-inmobiliaria',
      category: 'Web App',
      featured: true,
      imageUrl: '/images/placeholder-project2.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    }
  },
  {
    id: '3',
    attributes: {
      title: 'Portal de reservas para restaurante',
      description: 'Plataforma de reservas online con selección de mesa, menú y pago por adelantado para un restaurante gourmet.',
      slug: 'reservas-restaurante',
      category: 'Reservas',
      featured: true,
      imageUrl: '/images/placeholder-project3.svg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind']
    }
  }
];

export default async function ProjectsGrid({ 
  columns = 3, 
  showDetails = true,
  featured = false,
  limit = 0,
  category = '',
  title = 'Proyectos Destacados',
  description = 'Algunas de nuestras mejores creaciones'
}: ProjectsGridProps) {
  // Intentar obtener proyectos desde Strapi, usar placeholders en caso de error
  let projects: Project[] = [];
  try {
    projects = await getProjects();
    // Si no hay proyectos, usar placeholders
    if (!projects || projects.length === 0) {
      projects = placeholderProjects;
    }
  } catch (error) {
    console.error('Error al obtener proyectos de Strapi:', error);
    // Usar placeholders en caso de error
    projects = placeholderProjects;
  }
  
  // Aplicar filtros
  let filteredProjects = projects;
  
  // Filtrar por categoría si se especifica
  if (category) {
    filteredProjects = filteredProjects.filter(
      (project: Project) => project.attributes.category === category
    );
  }
  
  // Filtrar solo proyectos destacados si es necesario
  if (featured) {
    filteredProjects = filteredProjects.filter(
      (project: Project) => project.attributes.featured
    );
  }
  
  // Limitar cantidad si se especifica
  if (limit > 0 && filteredProjects.length > limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }
  
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <Section background="bg-gray-50">
      {/* Encabezado de la sección */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            {description}
          </p>
        )}
      </div>

      {/* Grid de proyectos */}
      {filteredProjects.length > 0 ? (
        <div className={`grid gap-6 sm:gap-8 ${gridCols[columns]}`}>
          {filteredProjects.map((project: Project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.attributes.title}
              description={project.attributes.description}
              category={project.attributes.category}
              imageUrl={project.attributes.imageUrl}
              slug={project.attributes.slug}
              technologies={project.attributes.technologies}
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