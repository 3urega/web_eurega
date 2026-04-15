import { Metadata } from 'next';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
// prueba deploy 4
export const metadata: Metadata = {
  title: 'Política de privacidad — Geodiari (Eurega)',
  description:
    'Política de privacidad de la aplicación Geodiari (Marc Farrés Pijuan / Eurega): tratamiento de datos, anuncios, derechos del interesado y contacto.',
  alternates: {
    canonical: 'https://eurega.es/privacy',
  },
  openGraph: {
    title: 'Política de privacidad — Geodiari (Eurega)',
    description:
      'Información sobre el tratamiento de datos personales en la aplicación Geodiari.',
    url: 'https://eurega.es/privacy',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <MainLayout>
      {/* push-test */}
      <PageHeader
        title='Política de privacidad de la aplicación "Geodiari" (Eurega)'
        description="Documento aplicable a la app Geodiari; el responsable del tratamiento es Marc Farrés Pijuan (Eurega)."
      />

      <Section>
        <Container>
          <article className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-a:text-purple-700">
            <h2>1. Responsable del tratamiento</h2>
            <p>
              <strong>Marc Farrés Pijuan (Eurega)</strong>
              <br />
              Desarrollador independiente (autónomo)
              <br />
              Web:{' '}
              <Link href="https://eurega.es" className="text-purple-700 hover:underline">
                https://eurega.es
              </Link>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:admin@eurega.es" className="text-purple-700 hover:underline">
                admin@eurega.es
              </a>
            </p>

            <h2>2. Ámbito de aplicación</h2>
            <p>
              Esta política de privacidad se aplica a la aplicación móvil y web «Geodiari»
              (desarrollada por Eurega), en adelante «la aplicación», incluyendo sus funcionalidades
              de registro de usuario, almacenamiento de datos y visualización de anuncios.
            </p>

            <h2>3. Datos que recopilamos</h2>

            <h3>3.1 Datos proporcionados por el usuario</h3>
            <ul>
              <li>Dirección de correo electrónico</li>
              <li>Credenciales de acceso (gestionadas de forma segura)</li>
              <li>Información introducida en la app:</li>
            </ul>
            <ul>
              <li>Municipios visitados</li>
              <li>Fechas y notas</li>
              <li>Contenido adicional (por ejemplo, imágenes, si la funcionalidad está habilitada)</li>
            </ul>

            <h3>3.2 Datos técnicos y de uso</h3>
            <ul>
              <li>Identificadores del dispositivo</li>
              <li>Dirección IP (de forma limitada)</li>
              <li>Eventos de uso necesarios para el funcionamiento de la aplicación</li>
            </ul>

            <h3>3.3 Datos de terceros (anuncios)</h3>
            <p>
              La aplicación puede integrar servicios de terceros (por ejemplo, redes publicitarias
              como Google AdMob) que recopilan datos técnicos para mostrar anuncios.
            </p>

            <h2>4. Finalidades y base legal (GDPR)</h2>
            <div className="not-prose overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Finalidad
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Base legal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Crear y gestionar la cuenta</td>
                    <td className="px-4 py-3">Ejecución de contrato</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Guardar visitas y contenido</td>
                    <td className="px-4 py-3">Ejecución de contrato</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Funcionamiento técnico de la app</td>
                    <td className="px-4 py-3">Interés legítimo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mejora del servicio</td>
                    <td className="px-4 py-3">Interés legítimo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mostrar anuncios personalizados (si aplica)</td>
                    <td className="px-4 py-3">Consentimiento del usuario</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>5. Anuncios y consentimiento</h2>
            <p>La aplicación puede mostrar anuncios para financiar su mantenimiento.</p>
            <p>
              Se podrán utilizar servicios como Google AdMob u otros proveedores. Estos proveedores
              pueden utilizar identificadores del dispositivo y cookies o tecnologías similares. En la
              Unión Europea, se solicitará consentimiento previo cuando sea requerido por la normativa
              aplicable.
            </p>
            <p>
              El usuario puede retirar su consentimiento en cualquier momento desde la configuración
              del dispositivo o de la aplicación (cuando esta funcionalidad esté disponible).
            </p>

            <h2>6. Almacenamiento y conservación de datos</h2>
            <p>
              Los datos se almacenan en servidores gestionados directamente o mediante proveedores
              externos (hosting, base de datos). Parte de la información puede almacenarse
              localmente en el dispositivo del usuario.
            </p>
            <p>
              <strong>Conservación de datos:</strong>
            </p>
            <ul>
              <li>Los datos se conservan mientras la cuenta esté activa.</li>
              <li>El usuario puede solicitar la eliminación de sus datos en cualquier momento.</li>
            </ul>
            <p>
              No se garantiza la disponibilidad permanente del servicio ni la conservación indefinida
              de los datos.
            </p>

            <h2>7. Contenido generado por el usuario</h2>
            <p>
              El usuario es responsable del contenido que introduce o sube a la aplicación.
            </p>
            <p>No se permite contenido:</p>
            <ul>
              <li>Ilegal</li>
              <li>Que vulnere derechos de terceros</li>
              <li>Ofensivo o inapropiado</li>
            </ul>
            <p>
              El desarrollador no realiza revisión sistemática del contenido, pero podrá eliminarlo
              si detecta incumplimientos.
            </p>

            <h2>8. Destinatarios de los datos</h2>
            <p>Los datos pueden ser tratados por:</p>
            <ul>
              <li>Proveedores de infraestructura (hosting, base de datos)</li>
              <li>Servicios de autenticación</li>
              <li>Plataformas de anuncios (por ejemplo, Google AdMob)</li>
            </ul>
            <p>No se venden datos personales a terceros.</p>

            <h2>9. Transferencias internacionales de datos</h2>
            <p>
              Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo. En estos
              casos, se adoptarán garantías adecuadas conforme al Reglamento General de Protección de
              Datos (GDPR), como cláusulas contractuales tipo.
            </p>

            <h2>10. Seguridad</h2>
            <p>
              Se aplican medidas técnicas y organizativas razonables para proteger los datos
              personales. No obstante, no se puede garantizar una seguridad absoluta frente a accesos
              no autorizados.
            </p>

            <h2>11. Derechos del usuario</h2>
            <p>El usuario tiene derecho a:</p>
            <ul>
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Oponerse al tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactar en:{' '}
              <a href="mailto:admin@eurega.es" className="text-purple-700 hover:underline">
                admin@eurega.es
              </a>
            </p>

            <h2>12. Eliminación de la cuenta</h2>
            <p>
              El usuario puede solicitar la eliminación de su cuenta y de todos los datos asociados
              en cualquier momento. La eliminación se realizará en un plazo razonable, salvo que
              exista obligación legal de conservación.
            </p>

            <h2>13. Menores de edad</h2>
            <p>
              La aplicación no está dirigida a menores de 16 años. No se recopilan intencionadamente
              datos personales de menores.
            </p>

            <h2>14. Cambios en la política</h2>
            <p>
              Esta política puede actualizarse en cualquier momento. Se recomienda revisarla
              periódicamente para estar informado de posibles cambios.
            </p>

            <h2>15. Contacto y autoridad de control</h2>
            <p>
              Para cualquier duda o solicitud relacionada con la privacidad:
              <br />
              Email:{' '}
              <a href="mailto:admin@eurega.es" className="text-purple-700 hover:underline">
                admin@eurega.es
              </a>
              <br />
              Web:{' '}
              <Link href="https://eurega.es" className="text-purple-700 hover:underline">
                https://eurega.es
              </Link>
            </p>
            <p>
              El usuario también puede presentar una reclamación ante la autoridad de control
              competente en materia de protección de datos.
            </p>

            <hr className="my-10 border-gray-200" />
            <p className="not-prose text-base text-gray-700">
              <strong>Aplicación:</strong> Geodiari
              <br />
              <strong>Package name:</strong> <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">com.geodiari.app</code>
            </p>
          </article>
        </Container>
      </Section>
    </MainLayout>
  );
}
