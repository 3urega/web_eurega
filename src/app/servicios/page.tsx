import { Metadata } from 'next';
import AIServicesDetailedSection from '@/components/sections/AIServicesDetailedSection';
import MainLayout from '@/components/layout/MainLayout';

// Metadatos específicos para la página de servicios
export const metadata: Metadata = {
  title: 'Servicios de IA | Automatización, Chatbots e Integración Inteligente | Eurega',
  description: 'Descubre nuestros servicios de IA para empresas: desarrollo de agentes inteligentes, chatbots conversacionales, automatización de procesos y web scraping avanzado.',
  alternates: {
    canonical: 'https://eurega.com/servicios',
  },
  openGraph: {
    title: 'Servicios de Inteligencia Artificial para Empresas | Eurega',
    description: 'Soluciones de IA que transforman procesos empresariales: automatización, chatbots y procesamiento inteligente de datos.',
  }
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <AIServicesDetailedSection showHeaderAndFooter={true} />
    </MainLayout>
  );
} 