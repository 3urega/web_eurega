import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { getServices } from '@/services/strapi';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  
  // Obtener todos los servicios
  const services = await getServices();
  
  // Encontrar el servicio por slug
  const service = services.find(
    (s: any) => s.attributes.slug === slug
  );
  
  // Si no se encuentra el servicio, mostrar la página 404
  if (!service) {
    notFound();
  }
  
  const { title, description, features } = service.attributes;
  
  return (
    <MainLayout>
      <PageHeader 
        title={title}
        description={description}
      />
      
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Lo que ofrecemos</h2>
              <div className="prose prose-lg max-w-none">
                <p>{description}</p>
                
                {/* Contenido adicional - en una implementación real vendría de Strapi */}
                <p>
                  Nos especializamos en proporcionar soluciones personalizadas que se adaptan 
                  perfectamente a las necesidades específicas de tu negocio, garantizando 
                  resultados que superan las expectativas.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Características</h2>
              {features && features.length > 0 ? (
                <ul className="space-y-3">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Este servicio no tiene características específicas listadas.</p>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
} 