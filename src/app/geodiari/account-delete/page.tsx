import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Eliminació de compte — Geodiari',
  description:
    "Com sol·licitar l'eliminació del compte i de les dades personals a l'aplicació Geodiari (Eurega).",
  alternates: {
    canonical: 'https://eurega.es/geodiari/account-delete',
  },
  openGraph: {
    title: 'Eliminació de compte — Geodiari',
    description:
      "Informació sobre la baixa del compte Geodiari i l'eliminació de dades associades.",
    url: 'https://eurega.es/geodiari/account-delete',
    type: 'website',
  },
};

export default function AccountDeletePage() {
  return (
    <MainLayout>
      <PageHeader
        title="Eliminació de compte — Geodiari"
        description="Informació per sol·licitar la baixa del compte i l'eliminació de les teves dades."
      />

      <Section>
        <Container>
          <article
            lang="ca"
            className="mx-auto max-w-2xl text-gray-800 [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:first:mt-0 [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
          >
            <h2>Explicació</h2>
            <p>
              Qualsevol usuari registrat a <strong>Geodiari</strong> pot sol·licitar l&apos;eliminació
              del seu compte i de les dades associades, d&apos;acord amb la normativa de protecció de
              dades aplicable.
            </p>

            <h2>Mètode d&apos;eliminació</h2>
            <p>Per iniciar el procés de baixa, cal que enviïs un correu electrònic a:</p>
            <p className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-medium text-gray-900">
              <a href="mailto:admin@eurega.es" className="text-purple-700 underline hover:text-purple-800">
                admin@eurega.es
              </a>
            </p>
            <p>
              Has d&apos;utilitzar el <strong>mateix correu electrònic</strong> amb què tens el compte
              registrat a Geodiari, i el missatge ha d&apos;indicar de manera clara que{' '}
              <strong>sol·liques l&apos;eliminació del teu compte</strong> (i, si ho desitges, de les
              dades vinculades).
            </p>

            <h2>Dades que s&apos;eliminen</h2>
            <p>En processar la sol·licitud vàlida, es procedeix a l&apos;eliminació del que faci referència al teu ús de l&apos;aplicació, incloent-hi, entre d&apos;altres:</p>
            <ul>
              <li>Compte d&apos;usuari</li>
              <li>Municipis visitats</li>
              <li>Notes associades</li>
              <li>Imatges associades a les visites (si n&apos;hi ha)</li>
            </ul>

            <h2>Temps de processament</h2>
            <p>
              La sol·licitud es gestionarà en un termini màxim de{' '}
              <strong>7 dies laborables</strong> des de la recepció del correu, sempre que es pugui
              verificar la identitat de l&apos;usuari de manera raonable.
            </p>

            <h2>Conservació de dades</h2>
            <p>
              Algunes dades poden conservar-se temporalment quan existeixi una obligació legal o
              quan sigui necessari per motius de seguretat o resolució d&apos;incidències, sempre en la
              mesura permesa per la llei. Passat aquest període, s&apos;eliminaran o anonimitzaran quan
              correspongui.
            </p>

            <h2>Contacte</h2>
            <p>
              Per a qualsevol dubte sobre aquest procés, pots escriure a:{' '}
              <a href="mailto:admin@eurega.es" className="text-purple-700 underline hover:text-purple-800">
                admin@eurega.es
              </a>
            </p>
          </article>
        </Container>
      </Section>
    </MainLayout>
  );
}
