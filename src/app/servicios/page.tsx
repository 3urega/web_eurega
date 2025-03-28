import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader 
        title="Nuestros Servicios" 
        description="Soluciones digitales para impulsar tu presencia online"
      />
      
      <Section>
        <ServicesGrid 
          title=""
          description=""
          showDetails={true}
          columns={3}
        />
      </Section>
    </MainLayout>
  );
} 