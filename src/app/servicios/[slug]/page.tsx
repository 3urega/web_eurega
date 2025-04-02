import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { getServices } from '@/services/strapi';

// Tipo estándar para los parámetros de ruta
export interface Params {
  slug: string;
}

// Función para generar metadatos dinámicos basados en el slug
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = params;
  const services = await getServices();
  const service = services.find((s: any) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Servicio no encontrado | Eurega',
      description: 'Lo sentimos, el servicio que buscas no está disponible.',
    };
  }
  
  const { title, description } = service;
  
  // Mapeo de slugs a palabras clave específicas para mejorar SEO
  const keywordMap: Record<string, string> = {
    'integracion-ia': 'agentes inteligentes, automatización, optimización de procesos, IA empresarial',
    'desarrollo-ia': 'desarrollo de IA, proyectos de IA personalizados, soluciones a medida, innovación IA',
    'chatbots-ia': 'chatbots inteligentes, asistentes virtuales, atención al cliente 24/7, IA conversacional',
    'web-scraping-ia': 'web scraping, extracción de datos, contenido dinámico, procesamiento de información'
  };
  
  return {
    title: `${title} | Servicios de IA de Eurega`,
    description: description || 'Descubre nuestros servicios de inteligencia artificial para empresas.',
    keywords: keywordMap[slug] || 'inteligencia artificial, IA, automatización, innovación tecnológica',
    alternates: {
      canonical: `https://eurega.com/servicios/${slug}`,
    },
    openGraph: {
      title: `${title} | Soluciones de IA para empresas`,
      description: description,
      url: `https://eurega.com/servicios/${slug}`,
      type: 'article',
    }
  };
}

// Generar rutas estáticas para la compilación
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service: any) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = params;
  
  // Obtener todos los servicios
  const services = await getServices();
  
  // Encontrar el servicio por slug
  const service = services.find(
    (s: any) => s.slug === slug
  );
  
  // Si no se encuentra el servicio, mostrar la página 404
  if (!service) {
    notFound();
  }
  
  const { title, description, features } = service;
  
  return (
    <MainLayout>
      <PageHeader 
        title={title}
        description={description}
        breadcrumb={[
          { label: 'Inicio', href: '/' },
          { label: 'Servicios', href: '/servicios' },
          { label: title, href: `/servicios/${slug}` }
        ]}
      />
      
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Lo que ofrecemos</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 font-medium">{description}</p>
                
                {/* Contenido adicional - en una implementación real vendría de Strapi */}
                <p className="text-gray-800 font-medium">
                  Nos especializamos en proporcionar soluciones personalizadas que se adaptan 
                  perfectamente a las necesidades específicas de tu negocio, garantizando 
                  resultados que superan las expectativas.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Características</h2>
              {features && features.length > 0 ? (
                <ul className="space-y-4">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                      <span className="text-purple-700 font-bold mr-3 mt-0.5 text-lg">✓</span>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800 font-medium">Este servicio no tiene características específicas listadas.</p>
              )}
            </div>
          </div>
          
          {/* Sección de CTA para contacto */}
          <div className="mt-16 bg-purple-50 p-8 rounded-lg border border-purple-100 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">¿Interesado en nuestro servicio de {title}?</h2>
            <p className="text-lg text-gray-800 mb-6 max-w-3xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a implementar esta solución en tu empresa. 
              Contáctanos hoy mismo para una consultoría gratuita.
            </p>
            <a 
              href="/contacto" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-purple-700 text-white hover:bg-purple-800 h-12 px-6 text-lg"
            >
              Solicitar información
            </a>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
} 