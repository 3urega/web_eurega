import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

/**
 * Política de privacidad Quantum Ops — fuente: politica-privacidad.md
 */
export default function QuantumPrivacyPolicyDoc() {
  return (
    <MainLayout>
      <PageHeader
        title="Política de privacidad — Quantum Ops"
        description="Última actualización: 24 de abril de 2026. Tratamiento de datos de la aplicación Quantum Ops (Eurega)."
      />

      <Section>
        <Container>
          <article className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-a:text-purple-700">
            <p className="lead text-gray-700">
              La presente Política de privacidad describe cómo se tratan los datos personales y la
              información asociada al uso de la aplicación móvil <strong>Quantum Ops</strong> (en
              adelante, la <strong>App</strong>), publicada en Google Play, y al contenido y servicios
              en línea a los que la App puede acceder en el marco de su funcionamiento.
            </p>

            <h2>1. Responsable del tratamiento</h2>
            <ul>
              <li>
                <strong>Identidad:</strong> Marc Farrés Pijuan
              </li>
              <li>
                <strong>NIF/CIF:</strong> 39379937G
              </li>
              <li>
                <strong>Domicilio:</strong> Grup Sant Josep 51, 08611 Olvan
              </li>
              <li>
                <strong>Correo electrónico de contacto (privacidad):</strong>{' '}
                <a href="mailto:admin@eurega.es" className="text-purple-700 hover:underline">
                  admin@eurega.es
                </a>
              </li>
            </ul>
            <p>
              Si en la organización existen distintos contactos (soporte técnico, legal, etc.), las
              consultas sobre protección de datos deben dirigirse a la dirección indicada para
              privacidad.
            </p>

            <h2>2. Ámbito</h2>
            <p>Esta política aplica a:</p>
            <ul>
              <li>
                La <strong>App</strong> para Android (identificador de paquete{' '}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">com.quantumops.app</code> u
                otro publicado bajo el mismo producto en Google Play, según corresponda en cada
                momento).
              </li>
              <li>
                El <strong>contenido web</strong> que la App carga a través de su interfaz (por
                ejemplo, la experiencia alojada en el dominio o URL que Eurega o el operador haya
                configurado en la versión publicada en tienda), cuando dicho acceso sea parte del
                servicio puesto a disposición del usuario.
              </li>
              <li>
                El <strong>tratamiento de datos</strong> derivado de la conexión a servidores y bases
                de datos que sustentan las funciones de la aplicación (p. ej., ejecución y registro de
                experimentos cuánticos en simulación y consulta de resultados), en la medida en que
                implique datos personales o identificables.
              </li>
            </ul>
            <p>
              <strong>Quantum Ops</strong> es una aplicación de laboratorio de experimentos cuánticos
              (p. ej., plantillas de experimento, resultados, historial y utilidades de aprendizaje
              asociadas al producto). La App <strong>no exige, según el diseño actual del producto</strong>, crear una cuenta de usuario para su uso básico; la lógica de negocio se centra en la
              ejecución de experimentos y en la interacción con los servidores back-end configurados.
            </p>

            <h2>3. Qué datos pueden tratarse y con qué finalidad</h2>
            <p>
              En función del despliegue del servicio, pueden aplicarse distintas categorías. A
              continuación se describen de forma transparente y orientativa las más habituales en un
              producto de este tipo.
            </p>

            <h3>3.1. Datos técnicos y de conexión</h3>
            <ul>
              <li>
                <strong>Direcciones IP</strong>, identificadores de conexión, fechas y horas de
                acceso, protocolos, <strong>registros de servidor</strong> (logs) y, en su caso,
                datos de dispositivo o de red necesarios para <strong>establecer la conexión</strong>,{' '}
                <strong>prestar el servicio</strong>, <strong>garantizar la seguridad</strong>{' '}
                (prevención de abusos, fraude, ataques) y, cuando proceda,{' '}
                <strong>cumplir obligaciones legales</strong>.
              </li>
            </ul>
            <p>
              <strong>Finalidad del tratamiento:</strong> prestación del servicio, mejora operativa,
              seguridad de la información, cumplimiento normativo.
            </p>
            <p>
              <strong>Base de legitimación (RGPD):</strong> interés legítimo en un entorno compatible
              con el derecho del usuario, y/o cumplimiento de obligaciones legales; o ejecución de
              medidas precontractuales o del contrato, según el caso concreto de la oferta (debe
              ajustarse al asesoramiento jurídico aplicable).
            </p>

            <h3>3.2. Datos generados al usar el laboratorio (experimentos y resultados)</h3>
            <p>
              Al ejecutar experimentos y almacenar o consultar resultados a través de los
              servidores, pueden generarse o conservarse, entre otros,{' '}
              <strong>identificadores de ejecución</strong>, parámetros técnicos del experimento,{' '}
              <strong>estados</strong>, <strong>contadores</strong>,{' '}
              <strong>registros de simulación</strong> o <strong>cargas de resultado</strong>{' '}
              (metadatos y datos de medición) y marcas de tiempo, en bases de datos u otros
              almacenamientos gestionados por el operador.
            </p>
            <p>
              Aunque muchos de estos datos son de naturaleza claramente técnica o agregada, en
              determinados contextos podría valorarse si constituyen o no informaciones relativas a
              una persona identificable. Por ello, se recomienda tratar con prudencia y, si aplica,
              realizar análisis de riesgo y minimización según el RGPD.
            </p>
            <p>
              <strong>Finalidad:</strong> permitir el funcionamiento del laboratorio, historial,
              comparación de ejecuciones y mejora del servicio, según la configuración concreta de la
              puesta en producción.
            </p>
            <p>
              <strong>Base de legitimación:</strong> a determinar (contrato, interés legítimo con
              evaluación de intereses, consentimiento, etc.) según el diseño de la oferta; conviene
              afinarlo con asesoramiento jurídico.
            </p>

            <h3>3.3. Almacenamiento local en el dispositivo (App / navegador embebido)</h3>
            <p>
              El cliente (App o el motor web integrado) puede emplear{' '}
              <strong>mecanismos de almacenamiento local</strong> (por ejemplo, almacenamiento del
              navegador) para <strong>preferencias de interfaz o de aprendizaje</strong> que mejoren
              la experiencia, sin perseguir, en el diseño descrito, perfilar al usuario con fines de
              publicidad. Los datos concretos dependen de la versión de la App y de su configuración.
            </p>

            <h3>3.4. Fuentes ajenas a la App</h3>
            <p>
              <strong>Google Play</strong> (y, en su caso, otros intermediarios) recogen y tratan
              datos conforme a sus propias políticas, incluida la instalación, actualizaciones,
              métricas de la tienda y, si se activan, servicios vinculados. El usuario puede consultar
              la{' '}
              <a
                href="https://policies.google.com/privacy"
                className="text-purple-700 hover:underline"
                rel="noopener noreferrer"
              >
                Política de privacidad de Google
              </a>{' '}
              y la{' '}
              <a
                href="https://play.google.com/intl/ALL_es/about/play-services/"
                className="text-purple-700 hover:underline"
                rel="noopener noreferrer"
              >
                Política de Google Play
              </a>
              .
            </p>

            <h2>4. Conservación</h2>
            <p>
              Los plazos de conservación de logs, resultados y copias de seguridad deben fijarse
              según el propósito (p. ej., mantenimiento del servicio, requisitos legales,
              reclamaciones) y documentarse internamente. Es recomendable minimizar el tiempo y el
              volumen de datos conservados.
            </p>

            <h2>5. Comunicación de datos y encargados del tratamiento</h2>
            <p>Pueden intervenir, según el despliegue real:</p>
            <ul>
              <li>
                <strong>Proveedores de alojamiento</strong> (servidores, bases de datos, CDN).
              </li>
              <li>
                <strong>Infraestructura en nube</strong> o centros de datos.
              </li>
              <li>
                <strong>Proveedores de métricas o soporte</strong> si se incorporan en el futuro (no
                deben añadirse a esta política hasta que estén operativos y contratados con cláusulas
                exigibles al RGPD).
              </li>
            </ul>
            <p>
              Los encargados concretos podrán detallarse en un anexo actualizado cuando corresponda.
            </p>
            <p>
              <strong>No</strong> se prevé, en el diseño general descrito, la <strong>venta</strong> de
              datos personales a terceros con fines de mercadotecnia, salvo que en el futuro se
              introduzca una finalidad distinta, lo cual exigiría transparencia y, en su caso, base
              jurídica adecuada y actualización de la presente política y de la información en la
              ficha de Google Play (Data safety / Seguridad de los datos).
            </p>

            <h2>6. Transferencias internacionales</h2>
            <p>
              Si algún encargado del tratamiento o proveedor con acceso a datos tiene sede o servidor
              fuera del Espacio Económico Europeo, se aplicarán las garantías previstas en el RGPD
              (cláusulas contractuales tipo, decisiones de adecuación, etc., según el caso).
            </p>

            <h2>7. Derechos de las personas interesadas (RGPD)</h2>
            <p>Quien resulte afectado por un tratamiento puede ejercer, en los términos legales:</p>
            <ul>
              <li>
                <strong>Acceso, rectificación, supresión, limitación, oposición, portabilidad</strong>{' '}
                (donde proceda) y, si los tratamientos se basan en el consentimiento,{' '}
                <strong>retirar el consentimiento</strong> sin afectar a la licitud del tratamiento
                previo.
              </li>
            </ul>
            <p>
              Para ejercer los derechos, el usuario puede escribir a{' '}
              <a href="mailto:admin@eurega.es" className="text-purple-700 hover:underline">
                admin@eurega.es
              </a>
              , acompañando prueba de identidad cuando sea necesario. También puede{' '}
              <strong>presentar reclamación</strong> ante la{' '}
              <strong>Agencia Española de Protección de Datos (AEPD)</strong> u otra autoridad
              competente, especialmente en España:{' '}
              <a
                href="https://www.aepd.es"
                className="text-purple-700 hover:underline"
                rel="noopener noreferrer"
              >
                https://www.aepd.es
              </a>
              .
            </p>

            <h2>8. Menores</h2>
            <p>
              La App no está, por su finalidad, dirigida a la recopilación de datos de{' '}
              <strong>menores de 14 años</strong>. No se recopilan intencionadamente datos personales
              de menores; el uso por menores debe hacerse con la supervisión que corresponda según la
              ley y las políticas de la tienda de aplicaciones.
            </p>

            <h2>9. Seguridad</h2>
            <p>
              Se aplican medidas técnicas y organizativas <strong>proporcionadas</strong> al riesgo:
              comunicaciones cifradas cuando se use HTTPS, controles de acceso a entornos de producción,
              copias y principio de mínima exposición, sin perjuicio de detallar lo que requieran
              auditorías o certificaciones aplicables.
            </p>

            <h2>10. Cambios en esta política</h2>
            <p>
              Esta Política de privacidad puede <strong>modificarse</strong> para reflejar cambios en
              el servicio, en la normativa o en las prácticas de tratamiento. Se publicará la{' '}
              <strong>fecha de la última actualización</strong> al inicio del documento. En cambios{' '}
              <strong>relevantes</strong>, se valorará notificar a los usuarios (por ejemplo, a través
              de la App, la web o el correo) según exija la ley o las condiciones de Google Play.
            </p>

            <h2>11. Contacto</h2>
            <p>Para cualquier cuestión sobre privacidad o el tratamiento de datos:</p>
            <ul>
              <li>
                <strong>Correo:</strong>{' '}
                <a href="mailto:admin@eurega.es" className="text-purple-700 hover:underline">
                  admin@eurega.es
                </a>
              </li>
            </ul>

            <hr className="my-10 border-gray-200" />
            <p className="not-prose text-sm text-gray-600">
              Texto informativo de carácter general. Debe revisarse y adaptarse con asesoramiento
              jurídico profesional a la realidad concreta del responsable, del alojamiento, de las
              integraciones terceras y de la ficha «Seguridad de los datos» en Google Play Console.
            </p>
            <p className="not-prose text-base text-gray-700">
              <strong>Aplicación:</strong> Quantum Ops
              <br />
              <strong>Package name:</strong>{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">com.quantumops.app</code>
            </p>
          </article>
        </Container>
      </Section>
    </MainLayout>
  );
}
