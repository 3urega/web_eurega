import { Metadata } from 'next';
import GeodiariPrivacyPolicyDoc from '@/components/legal/GeodiariPrivacyPolicyDoc';

export const metadata: Metadata = {
  title: 'Política de privacidad — Geodiari (Eurega)',
  description:
    'Política de privacidad de la aplicación Geodiari (Marc Farrés Pijuan / Eurega): tratamiento de datos, anuncios, derechos del interesado y contacto.',
  alternates: {
    canonical: 'https://www.eurega.es/privacy',
  },
  openGraph: {
    title: 'Política de privacidad — Geodiari (Eurega)',
    description:
      'Información sobre el tratamiento de datos personales en la aplicación Geodiari.',
    url: 'https://www.eurega.es/privacy',
    type: 'website',
  },
};

export default function PrivacyLegacyPage() {
  return <GeodiariPrivacyPolicyDoc />;
}
