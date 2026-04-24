import { Metadata } from 'next';
import QuantumPrivacyPolicyDoc from '@/components/legal/QuantumPrivacyPolicyDoc';

export const metadata: Metadata = {
  title: 'Política de privacidad — Quantum Ops (Eurega)',
  description:
    'Política de privacidad de Quantum Ops: tratamiento de datos, laboratorio de experimentos cuánticos, derechos RGPD y contacto.',
  alternates: {
    canonical: 'https://eurega.es/quantum/privacy',
  },
  openGraph: {
    title: 'Política de privacidad — Quantum Ops (Eurega)',
    description:
      'Información sobre el tratamiento de datos en la aplicación Quantum Ops.',
    url: 'https://eurega.es/quantum/privacy',
    type: 'website',
  },
};

export default function QuantumPrivacyPage() {
  return <QuantumPrivacyPolicyDoc />;
}
