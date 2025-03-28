# Mejoras para el Plan de Desarrollo de Eurega

Este documento contiene mejoras y secciones adicionales para complementar el `desarrollo-detallado-fase3.md` existente.

## 1. Nuevas Secciones a Incorporar

### 6. Estrategia de Accesibilidad (WCAG 2.1)

#### 6.1. Principios Básicos
- **Perceptible**: Textos alternativos para imágenes, subtítulos para videos, contraste suficiente.
- **Operable**: Navegación por teclado, tiempo suficiente, prevención de ataques epilépticos.
- **Comprensible**: Texto legible, operación predecible, asistencia para entrada de datos.
- **Robusto**: Compatibilidad con tecnologías asistivas.

#### 6.2. Implementación en Componentes
- Todos los `<img>` con atributos `alt` descriptivos
- Controles de formulario con etiquetas y mensajes de error accesibles
- Navegación por teclado en componentes interactivos
- Estados de foco visibles y consistentes
- Roles ARIA en componentes personalizados

#### 6.3. Checklist de Accesibilidad por Componente

| Componente | Requerimientos |
|------------|----------------|
| Botones | - Texto descriptivo<br>- Contraste suficiente<br>- Foco visible<br>- Etiqueta aria si es necesario |
| Formularios | - Labels asociados<br>- Validación con mensajes claros<br>- Agrupación lógica de campos |
| Navegación | - Skip to content<br>- Estructura jerárquica<br>- Current page indicator |
| Modales | - Trap focus<br>- Escape key cierra<br>- aria-modal<br>- Retorno al elemento origen |

### 7. Optimización para Buscadores (SEO)

#### 7.1. Metadatos y Estructura
- Implementación de metadatos dinámicos por página
- Estructura HTML semántica con H1-H6 apropiados
- URLs amigables para buscadores

#### 7.2. Optimización de Contenido
- Estrategia para contenido dinámico de Strapi (metadescripciones, títulos)
- Schema.org markup para proyectos y servicios
- Optimización de imágenes (tamaño, nombres de archivo, alt text)

#### 7.3. Rendimiento SEO
- Implementación de sitemap.xml dinámico
- Estrategia para páginas canónicas
- Plan para contenido indexable vs no indexable

#### 7.4. Implementación Técnica SEO

```tsx
// Ejemplo de implementación de metadatos SEO en página de proyecto
// src/app/proyectos/[slug]/page.tsx

import { Metadata } from 'next';
import { getProject } from '@/services/strapi';

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado | Eurega',
      description: 'No hemos podido encontrar el proyecto que buscas.'
    };
  }
  
  return {
    title: `${project.attributes.title} | Proyectos | Eurega`,
    description: project.attributes.description,
    openGraph: {
      images: [project.attributes.imageUrl],
      title: `${project.attributes.title} | Eurega`,
      description: project.attributes.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.attributes.title} | Eurega`,
      description: project.attributes.description,
      images: [project.attributes.imageUrl],
    }
  };
}
```

### 8. Análisis y Monitoreo

#### 8.1. Implementación de Analíticas
- Integración con Google Analytics 4 / Plausible / Fathom
- Eventos personalizados para acciones importantes
- Objetivos de conversión por página

#### 8.2. Monitoreo de Rendimiento
- Estrategia para seguimiento de Core Web Vitals
- Alertas para caídas de rendimiento
- Informes automáticos periódicos

#### 8.3. Implementación Técnica

```tsx
// Componente de Analíticas (src/components/layout/Analytics.tsx)
"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Enviar evento de cambio de página 
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Enviar a GA4
    window.gtag?.('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
    
    // Custom event para Plausible/Fathom
    window.plausible?.('pageview', { props: { path: url } });
  }, [pathname, searchParams]);
  
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      
      {/* Plausible Analytics */}
      <Script
        data-domain="eurega.com"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
```

### 9. Estrategia de Internacionalización (i18n)

#### 9.1. Configuración i18n en Next.js
- Soporte para múltiples idiomas (Español, Inglés)
- URLs localizadas (/es/servicios, /en/services)
- Detección automática de idioma preferido

#### 9.2. Estructura de Contenido
- Modelo de datos en Strapi con soporte multiidioma
- Traducción de rutas y metadatos
- Gestión de assets específicos por idioma

#### 9.3. UI Multilingüe
- Selector de idioma en Header
- Persistencia de preferencia de idioma
- Componentes adaptados a diferencias de longitud de texto

## 2. Mejoras a Secciones Existentes

### 2.1. Cliente vs Servidor - Diagrama Visual

Añadir este diagrama a la sección 4.2 (Consideraciones Técnicas Generales):

```
┌─────────────────────┐     ┌────────────────────┐
│  SERVER COMPONENTS  │     │ CLIENT COMPONENTS  │
├─────────────────────┤     ├────────────────────┤
│ - MainLayout        │     │ - ProjectsFilter   │
│ - ServicesGrid      │◄────┤ - ContactForm      │
│ - Section           │     │ - Tabs             │
│ - Container         │     │ - Toast            │
└─────────────────────┘     └────────────────────┘
         ▲                           ▲
         │                           │
         │    ┌─────────────────┐    │
         └────┤  DATA FETCHING  ├────┘
              └─────────────────┘
```

### 2.2. Testing Completo

Expandir la sección 4.2 con estrategias de testing:

#### 4.2.5. Estrategia de Testing

- **Testing unitario**: 
  - Utilizar Vitest para componentes UI
  - Testing Library para componentes React
  - MSW para mocking de API

- **Testing de integración**:
  - Cypress para flujos de usuario completos
  - Testing de rutas y navegación

- **Testing de accesibilidad**:
  - Auditorías automatizadas con axe-core
  - Testing manual con lectores de pantalla

- **Ejemplo de test para Button**:

```tsx
// src/components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-600');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-2');
    
    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });
});
```

### 2.3. Optimización de Rendimiento

Expandir la sección 4.2.4 (Performance):

#### 4.2.4. Optimización de Rendimiento

- **Estrategia de carga**:
  - Implementación de lazy loading para componentes pesados
  - Route prefetching para navegación fluida
  - Priorización de carga de recursos críticos

- **Optimización de imágenes**:
  - Implementación de next/image con valores óptimos
  - Formatos modernos (WebP, AVIF)
  - Responsive image sizes

- **Performance budgets**:
  - TTI < 3.5s en 3G
  - FCP < 1.8s
  - LCP < 2.5s 
  - CLS < 0.1

- **Ejemplo de implementación de lazy loading**:

```tsx
// src/app/proyectos/page.tsx
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy load del componente pesado
const ProjectsFilter = dynamic(() => import('@/components/sections/ProjectsFilter'), {
  loading: () => <LoadingSpinner size="sm" />
});

export default function ProjectsPage() {
  return (
    <MainLayout>
      <PageHeader 
        title="Nuestros Proyectos" 
        description="Explora nuestro portafolio"
      />
      
      <Section>
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectsList />
        </Suspense>
      </Section>
    </MainLayout>
  );
}
```

### 2.4. Componente ContactForm Mejorado

Expandir los ejemplos de implementación:

```tsx
// src/components/sections/ContactForm.tsx
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendContactForm } from '@/services/strapi';
import FormField from './FormField';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

// Schema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es demasiado corto').max(50),
  email: z.string().email('Introduce un email válido'),
  service: z.string().optional(),
  message: z.string().min(10, 'El mensaje es demasiado corto').max(500),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar los términos' }),
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  services?: {id: string; name: string}[];
  layout?: 'standard' | 'compact' | 'full';
  onSuccess?: () => void;
}

export default function ContactForm({ 
  services = [], 
  layout = 'standard',
  onSuccess 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: '',
      acceptTerms: false,
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormStatus('idle');
    
    try {
      await sendContactForm(data);
      setFormStatus('success');
      reset();
      onSuccess?.();
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.');
      console.error('Error sending form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formStatus === 'success') {
    return (
      <Alert 
        type="success"
        title="¡Mensaje enviado!"
        message="Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible."
        dismissible
        onDismiss={() => setFormStatus('idle')}
      />
    );
  }

  return (
    <div className={`form-container form-${layout}`}>
      {formStatus === 'error' && (
        <Alert 
          type="error"
          title="Error"
          message={errorMessage}
          dismissible
          onDismiss={() => setFormStatus('idle')}
        />
      )}
      
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6"
        aria-label="Formulario de contacto"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Nombre"
            error={errors.name?.message}
            required
          >
            <input
              type="text"
              {...register('name')}
              className="w-full p-3 border rounded-lg"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
          </FormField>
          
          <FormField
            label="Email"
            error={errors.email?.message}
            required
          >
            <input
              type="email"
              {...register('email')}
              className="w-full p-3 border rounded-lg"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </FormField>
        </div>
        
        {services.length > 0 && (
          <FormField
            label="Servicio de interés"
            error={errors.service?.message}
          >
            <select
              {...register('service')}
              className="w-full p-3 border rounded-lg"
              aria-invalid={errors.service ? 'true' : 'false'}
            >
              <option value="">Selecciona un servicio</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </FormField>
        )}
        
        <FormField
          label="Mensaje"
          error={errors.message?.message}
          required
        >
          <textarea
            {...register('message')}
            rows={5}
            className="w-full p-3 border rounded-lg"
            aria-invalid={errors.message ? 'true' : 'false'}
          />
        </FormField>
        
        <FormField
          error={errors.acceptTerms?.message}
        >
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('acceptTerms')}
              className="mt-1 mr-2"
              aria-invalid={errors.acceptTerms ? 'true' : 'false'}
            />
            <label className="text-sm text-gray-600">
              Acepto la política de privacidad y el tratamiento de mis datos
            </label>
          </div>
        </FormField>
        
        <div className="mt-8">
          <Button
            type="submit"
            variant="primary"
            fullWidth={layout !== 'standard'}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </div>
      </form>
    </div>
  );
}
```

## 3. Priorización Actualizada

Actualizar la sección 4.1 con una matriz de priorización más detallada:

| Componente | Importancia | Complejidad | Prioridad | Dependencias |
|------------|-------------|-------------|-----------|--------------|
| Container  | Alta | Baja | 1 | Ninguna |
| Section    | Alta | Baja | 1 | Container |
| PageHeader | Alta | Baja | 1 | Container |
| Card       | Alta | Media | 1 | Ninguna |
| Button     | Alta | Media | 1 | Ninguna |
| ServiceCard | Alta | Media | 2 | Card, Button |
| ServicesGrid | Alta | Media | 2 | ServiceCard, Section |
| ProjectCard | Alta | Media | 2 | Card, Button |
| ProjectsGrid | Alta | Media | 2 | ProjectCard, Section |
| ProjectsFilter | Media | Alta | 3 | Button |
| ContactForm | Alta | Alta | 3 | FormField, Button, Alert |
| TestimonialsSection | Media | Media | 4 | Card, Section |
| Toast/Alert | Media | Media | 4 | Ninguna |

## 4. Guía de Estilo y Convenciones

Agregar una nueva sección sobre convenciones de código:

### 10. Guía de Estilo y Convenciones

#### 10.1. Nomenclatura

- **Componentes**: PascalCase (ej. `ServiceCard.tsx`)
- **Funciones de utilidad**: camelCase (ej. `formatDate.ts`)
- **Constantes**: UPPER_SNAKE_CASE (ej. `MAX_ITEMS`)
- **Tipos/Interfaces**: PascalCase (ej. `interface ServiceProps`)

#### 10.2. Estructura de Archivos

```
src/
├── app/                 # Páginas y layouts (App Router)
├── components/
│   ├── layout/          # Componentes estructurales (Header, Footer)
│   ├── sections/        # Secciones de página (Hero, ServicesGrid)
│   └── ui/              # Componentes base reutilizables (Button, Card)
├── hooks/               # Custom hooks
├── lib/                 # Utilidades y funciones
├── services/            # Servicios de API
└── types/               # Definiciones de tipos globales
```

#### 10.3. Convenciones de Código

- Props en orden alfabético con tipos explícitos
- Desestructuración de props en parámetros de función
- Hooks agrupados al inicio del componente
- Funciones de utilidad extraídas fuera del componente
- Comentarios JSDoc para funciones y componentes principales

#### 10.4. Ejemplo de Componente Bien Estructurado

```tsx
/**
 * Componente para mostrar una tarjeta de servicio
 * 
 * @example
 * <ServiceCard 
 *   title="Desarrollo Web" 
 *   description="Creamos sitios web modernos"
 *   icon={<WebIcon />}
 * />
 */
export default function ServiceCard({
  description,
  features = [],
  icon,
  link,
  showDetails = true,
  title,
}: ServiceCardProps) {
  // Funciones y variables
  const hasFeatures = features.length > 0;
  
  // Renderizado
  return (
    <Card className="service-card">
      {/* Resto del componente */}
    </Card>
  );
}

/**
 * Props para el componente ServiceCard
 */
interface ServiceCardProps {
  /** Descripción corta del servicio */
  description: string;
  /** Lista de características del servicio */
  features?: string[];
  /** SVG o componente de icono */
  icon?: string | React.ReactNode;
  /** Enlace a la página de detalle */
  link?: string;
  /** Si mostrar detalles extendidos */
  showDetails?: boolean;
  /** Título del servicio */
  title: string;
}
``` 