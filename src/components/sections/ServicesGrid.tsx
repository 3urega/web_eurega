import React from 'react';
import ServiceCard from './ServiceCard';
import Section from '../ui/Section';
import { getServices } from '@/services/strapi';

// Definición de tipos
interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  slug: string;
  featured?: boolean;
  features?: any; // Campo JSON de Strapi
}

interface ServicesGridProps {
  columns?: 1 | 2 | 3 | 4;
  showDetails?: boolean;
  featured?: boolean;
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
 * Función de tipado y validación
 */
const isValidService = (service: any): service is Service => {
  return (
    service &&
    typeof service.id === 'string' &&
    typeof service.title === 'string' &&
    typeof service.description === 'string' &&
    typeof service.slug === 'string'
  );
};

/**
 * Componente para mostrar una rejilla de servicios
 */
export default async function ServicesGrid({ 
  columns = 3, 
  showDetails = true,
  featured = false,
  title = 'Nuestros Servicios',
  description = 'Soluciones personalizadas para impulsar tu presencia digital'
}: ServicesGridProps) {
  // Obtener servicios de Strapi
  let services = await getServices();

  // Filtrar servicios que no tienen los campos necesarios
  services = services.filter(isValidService);
  
  // Si se especifica featured=true, filtrar solo servicios destacados
  let displayedServices = services;
  if (featured) {
    displayedServices = services.filter(service => service.featured);
  }

  // Si no hay servicios para mostrar, no renderizar el componente
  if (displayedServices.length === 0) {
    return null;
  }

  return (
    <Section
      title={title}
      subtitle={description}
    >
      {/* Grid de servicios */}
      <div className={`grid gap-6 sm:gap-8 ${gridCols[columns]}`}>
        {displayedServices.map((service) => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon || undefined}
            link={`/servicios/${service.slug}`}
            features={service.features || []}
            showDetails={showDetails}
          />
        ))}
      </div>
    </Section>
  );
}