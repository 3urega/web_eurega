import { getServices } from '@/services/strapi';
import ServiceCard from './ServiceCard';
import Section from '../ui/Section';

// Definir la interfaz para los atributos del servicio
interface ServiceAttributes {
  title: string;
  description: string;
  icon?: string;
  slug: string;
  featured?: boolean;
  features?: any; // Campo JSON de Strapi
}

// Definir la interfaz para un servicio
interface Service {
  id: string;
  attributes: ServiceAttributes;
}

interface ServicesGridProps {
  columns?: 1 | 2 | 3 | 4;
  showDetails?: boolean;
  featured?: boolean;
  title?: string;
  description?: string;
}

// Placeholder para servicios mientras Strapi no esté configurado o cuando hay errores
const placeholderServices: Service[] = [
  {
    id: '1',
    attributes: {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, rápidos y optimizados para SEO que convierten visitantes en clientes.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg>',
      slug: 'desarrollo-web',
      featured: true,
      features: [
        'Diseño responsive',
        'Optimización para SEO',
        'Alto rendimiento',
        'CMS integrado'
      ]
    }
  },
  {
    id: '2',
    attributes: {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas y multiplataforma con interfaces intuitivas y experiencias de usuario excepcionales.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',
      slug: 'aplicaciones-moviles',
      featured: true,
      features: [
        'iOS y Android',
        'Diseño intuitivo',
        'Notificaciones push',
        'Integración con APIs'
      ]
    }
  },
  {
    id: '3',
    attributes: {
      title: 'Consultoría Técnica',
      description: 'Asesoramiento experto en arquitectura de software, selección de tecnologías y mejores prácticas de desarrollo.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.5 5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zm-.5 2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 8 7z"/></svg>',
      slug: 'consultoria-tecnica',
      featured: true,
      features: [
        'Auditorías técnicas',
        'Optimización de procesos',
        'Selección de stack',
        'Capacitación de equipos'
      ]
    }
  }
];

// Función para verificar si un servicio es válido (tiene todas las propiedades necesarias)
const isValidService = (service: any): service is Service => {
  return (
    service &&
    typeof service === 'object' &&
    'id' in service &&
    'attributes' in service &&
    service.attributes &&
    typeof service.attributes === 'object' &&
    'title' in service.attributes &&
    'description' in service.attributes &&
    'slug' in service.attributes
  );
};

export default async function ServicesGrid({ 
  columns = 3, 
  showDetails = true,
  featured = false,
  title = 'Nuestros Servicios',
  description = 'Soluciones personalizadas para impulsar tu presencia digital'
}: ServicesGridProps) {
  // Intentar obtener servicios desde Strapi, usar placeholders en caso de error
  let services: Service[] = [];
  try {
    const fetchedServices = await getServices();
    
    // Verificar que los servicios obtenidos tienen la estructura correcta
    if (Array.isArray(fetchedServices) && fetchedServices.length > 0) {
      // Filtrar solo los servicios que tienen la estructura correcta
      services = fetchedServices.filter(isValidService);
    }
    
    // Si no hay servicios válidos, usar placeholders
    if (services.length === 0) {
      services = placeholderServices;
    }
  } catch (error) {
    console.error('Error al obtener servicios de Strapi:', error);
    // Usar placeholders en caso de error
    services = placeholderServices;
  }
  
  // Filtrar solo servicios destacados si es necesario
  const displayedServices = featured
    ? services.filter(service => service.attributes && service.attributes.featured)
    : services;
  
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <Section background="bg-white">
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

      {/* Grid de servicios */}
      <div className={`grid gap-6 sm:gap-8 ${gridCols[columns]}`}>
        {displayedServices.map((service) => (
          <ServiceCard 
            key={service.id}
            title={service.attributes.title}
            description={service.attributes.description}
            icon={service.attributes.icon || undefined}
            link={`/servicios/${service.attributes.slug}`}
            features={service.attributes.features || []}
            showDetails={showDetails}
          />
        ))}
      </div>
    </Section>
  );
}