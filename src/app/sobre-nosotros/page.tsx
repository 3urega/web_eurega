import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHeader 
        title="Sobre Nosotros" 
        description="Conoce a Eurega, expertos en desarrollo web y soluciones digitales"
      />
      
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Nuestra Historia</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Eurega nació en 2022 con la visión de transformar ideas en soluciones digitales 
                  efectivas para empresas de todos los tamaños. Desde entonces, nos hemos 
                  consolidado como un referente en el sector del desarrollo web y aplicaciones móviles.
                </p>
                <p>
                  Nuestra filosofía se basa en la combinación de diseño centrado en el usuario, 
                  desarrollo técnico de primera clase y estrategias de marketing digital efectivas.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Nuestros Valores</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-xl">•</span>
                  <div>
                    <p className="font-bold">Innovación</p>
                    <p className="text-gray-600">Buscamos constantemente nuevas formas de resolver problemas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-xl">•</span>
                  <div>
                    <p className="font-bold">Excelencia</p>
                    <p className="text-gray-600">Nos comprometemos con la calidad en cada detalle de nuestro trabajo.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-xl">•</span>
                  <div>
                    <p className="font-bold">Colaboración</p>
                    <p className="text-gray-600">Trabajamos estrechamente con nuestros clientes como verdaderos socios.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-xl">•</span>
                  <div>
                    <p className="font-bold">Transparencia</p>
                    <p className="text-gray-600">Mantenemos una comunicación clara y directa en todo momento.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Aquí irían los miembros del equipo. En una implementación real, vendrían de Strapi */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Miguel Torres</h3>
                <p className="text-gray-600">Fundador & Desarrollador</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Sara Jiménez</h3>
                <p className="text-gray-600">Diseñadora UX/UI</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">David López</h3>
                <p className="text-gray-600">Desarrollador Full Stack</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
} 