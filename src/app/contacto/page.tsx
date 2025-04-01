import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

// Metadatos específicos para la página de contacto
export const metadata: Metadata = {
  title: 'Contacto | Consultoría de IA personalizada | Eurega',
  description: 'Contacta con nuestro equipo de expertos en IA para recibir asesoramiento personalizado sobre tus proyectos de automatización, chatbots e integración de inteligencia artificial.',
  alternates: {
    canonical: 'https://eurega.com/contacto',
  },
  openGraph: {
    title: 'Contacta con Eurega | Expertos en soluciones de IA',
    description: 'Solicita información sobre nuestros servicios de IA. Estamos listos para ayudarte con tu próximo proyecto tecnológico.',
  }
};

export default function ContactPage() {
  return (
    <MainLayout>
      <PageHeader 
        title="Contacto" 
        description="Estamos aquí para responder a tus preguntas y ayudarte con tu próximo proyecto"
      />
      
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="mt-1 text-purple-700 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Teléfono</h3>
                    <p className="text-gray-800 font-medium">+34 912 345 678</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="mt-1 text-purple-700 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <p className="text-gray-800 font-medium">info@eurega.com</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="mt-1 text-purple-700 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Dirección</h3>
                    <p className="text-gray-800 font-medium">Calle Principal, 123<br/>28001 Madrid, España</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Horario</h2>
                <p className="text-gray-800 font-medium">
                  <span className="font-semibold">Lunes a Viernes:</span> 9:00 - 18:00<br/>
                  <span className="font-semibold">Sábados y Domingos:</span> Cerrado
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Consultoría de IA Personalizada</h2>
              <p className="mb-6 text-gray-800 font-medium">
                ¿Buscas mejorar tu negocio con inteligencia artificial? Contacta con nuestros expertos 
                para recibir asesoramiento personalizado sobre integración de IA, automatización de procesos 
                o desarrollo de chatbots inteligentes.
              </p>
              
              <div className="bg-purple-50 p-8 rounded-lg border border-purple-100 shadow-sm">
                <p className="text-center text-purple-800 font-medium mb-4">
                  Formulario de contacto en desarrollo...
                </p>
                <p className="text-gray-800 font-medium">
                  Mientras tanto, puedes enviarnos un email a <a href="mailto:info@eurega.com" className="text-purple-700 font-semibold hover:underline">info@eurega.com</a> o 
                  llamarnos al <a href="tel:+34912345678" className="text-purple-700 font-semibold hover:underline">+34 912 345 678</a>.
                </p>
              </div>
              
              {/* FAQ para SEO */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Preguntas frecuentes</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900">¿Qué información necesito para solicitar una consultoría de IA?</h4>
                    <p className="text-gray-800">Para ofrecerte la mejor solución, es útil que nos proporciones detalles sobre tu negocio, los procesos que quieres mejorar y tus objetivos con la implementación de IA.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900">¿Ofrecen demostraciones de sus soluciones de IA?</h4>
                    <p className="text-gray-800">Sí, podemos programar una demostración personalizada de nuestras soluciones de IA adaptadas a tu sector y necesidades específicas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
} 