# Desarrollo Detallado de Componentes Principales - eurega

Este documento amplía la fase 3 del plan de desarrollo para la web corporativa de "eurega", proporcionando un análisis detallado de los componentes principales necesarios, su implementación técnica y consideraciones de diseño.

## 1. Componentes de Layout y Estructura Base

> **Nota**: Los componentes Header, Footer y MainLayout ya han sido implementados. Esta sección los describe para referencia y posibles mejoras.

### 1.1. Componentes de Layout Existentes

#### Header (`src/components/layout/Header.tsx`)
- **Características actuales**: 
  - Navegación responsive
  - Menú móvil con animación
  - Logo de la marca
  - CTA principal (Contactar)
  
- **Mejoras potenciales**:
  - Añadir transición de color al hacer scroll
  - Implementar indicador de sección activa más visible
  - Añadir funcionalidad de búsqueda
  - Integrar opciones de idioma (si se decide implementar i18n)

#### Footer (`src/components/layout/Footer.tsx`)
- **Características actuales**:
  - Enlaces de navegación principal
  - Enlaces a redes sociales
  - Copyright con año actualizado
  
- **Mejoras potenciales**:
  - Añadir suscripción a newsletter
  - Incluir mapa del sitio más detallado
  - Mostrar certificaciones o badges
  - Añadir política de privacidad y términos

#### MainLayout (`src/components/layout/MainLayout.tsx`)
- **Características actuales**:
  - Estructura básica con header, main y footer
  
- **Mejoras potenciales**:
  - Añadir sistema de notificaciones/toast
  - Implementar transitions entre páginas
  - Soporte para layouts específicos por ruta

### 1.2. Nuevos Componentes de Estructura

#### 1.2.1. PageHeader
- **Descripción**: Componente para encabezados de página interiores.
- **Propiedades**:
  - `title`: Título principal de la página
  - `description`: Descripción corta
  - `breadcrumb`: Array de items para breadcrumb
  - `backgroundImage`: Imagen de fondo (opcional)
  - `alignment`: Alineación del texto ('left', 'center')
- **Consideraciones**:
  - Componente de servidor (no requiere "use client")
  - Diseño responsive con ajustes para móvil
  - Versión compacta para páginas secundarias

#### 1.2.2. Container
- **Descripción**: Componente para mantener el contenido dentro del ancho máximo con paddings consistentes.
- **Propiedades**:
  - `children`: Contenido
  - `className`: Clases adicionales
  - `size`: Tamaño ('sm', 'md', 'lg', 'xl', 'full')
  - `padding`: Padding personalizado
- **Consideraciones**:
  - Componente de servidor
  - Utilizable en todas las secciones para mantener consistencia

#### 1.2.3. Section
- **Descripción**: Contenedor para secciones con espaciado vertical consistente.
- **Propiedades**:
  - `children`: Contenido
  - `className`: Clases adicionales
  - `id`: ID para navegación por ancla
  - `background`: Color de fondo o gradiente
  - `spacing`: Espaciado vertical ('sm', 'md', 'lg')
- **Consideraciones**:
  - Componente de servidor
  - Establecer espaciado vertical consistente en todo el sitio

## 2. Componentes de Secciones Principales

### 2.1. Componente Hero (Existente con Mejoras)

- **Ampliaciones propuestas**:
  - Variantes adicionales de Hero para diferentes páginas
  - Soporte para video de fondo o animaciones más complejas
  - Integración con CMS para actualización dinámica
  - Variante con formulario de contacto integrado

### 2.2. Sección de Servicios

#### 2.2.1. ServicesGrid
- **Descripción**: Cuadrícula para mostrar los servicios principales.
- **Propiedades**:
  - `services`: Array de servicios desde Strapi
  - `columns`: Número de columnas (1-4)
  - `showDetails`: Mostrar descripción completa
- **Consideraciones técnicas**:
  - Puede implementarse como componente de servidor si no requiere filtrado
  - Obtendrá datos desde Strapi en build/request time
  - Diseño responsive con reorganización para distintos dispositivos

#### 2.2.2. ServiceCard
- **Descripción**: Tarjeta individual para un servicio.
- **Propiedades**:
  - `title`: Título del servicio
  - `description`: Descripción corta
  - `icon`: Icono representativo
  - `link`: Enlace a página de detalle
  - `features`: Lista de características (opcional)
- **Consideraciones técnicas**:
  - Componente de servidor (a menos que incluya interactividad)
  - Diseño con hover state y transiciones
  - Optimizar para readability y conversión

#### 2.2.3. ServiceFeature
- **Descripción**: Componente para destacar aspectos clave de un servicio.
- **Propiedades**:
  - `title`: Título de la característica
  - `description`: Descripción detallada
  - `image`: Imagen ilustrativa
  - `reversed`: Alternar layout (imagen-texto / texto-imagen)
- **Consideraciones técnicas**:
  - Componente de servidor
  - Layout alternado para crear ritmo visual
  - Optimización de imágenes con next/image

### 2.3. Galería de Proyectos

#### 2.3.1. ProjectsFilter (Cliente)
- **Descripción**: Sistema de filtrado para la galería de proyectos.
- **Propiedades**:
  - `categories`: Categorías disponibles
  - `technologies`: Tecnologías disponibles  
  - `activeFilters`: Filtros actualmente aplicados
  - `onFilterChange`: Callback para cambio de filtros
- **Consideraciones técnicas**:
  - **Directiva "use client"** requerida por ser interactivo
  - Implementar con React Hook Form para gestión de filtros
  - Diseño responsive para adaptarse a móvil

#### 2.3.2. ProjectsGrid
- **Descripción**: Cuadrícula para mostrar proyectos con filtrado y paginación.
- **Propiedades**:
  - `projects`: Array de proyectos (posiblemente filtrado)
  - `layout`: Tipo de cuadrícula ('grid', 'masonry', 'list')
  - `itemsPerPage`: Número de proyectos por página
  - `showPagination`: Mostrar controles de paginación
- **Consideraciones técnicas**:
  - **Directiva "use client"** por interactividad
  - Implementar animaciones de transición con Framer Motion
  - Lazy loading para imágenes
  - Posible implementación de infinite scroll

#### 2.3.3. ProjectCard
- **Descripción**: Tarjeta individual para un proyecto.
- **Propiedades**:
  - `title`: Título del proyecto
  - `description`: Descripción corta
  - `image`: Imagen principal
  - `technologies`: Array de tecnologías usadas
  - `category`: Categoría del proyecto
  - `link`: Enlace a página de detalle
- **Consideraciones técnicas**:
  - Puede ser componente servidor si no incluye interactividad
  - Optimización de imágenes con next/image
  - Hover state con información adicional

#### 2.3.4. ProjectDetail
- **Descripción**: Visualización detallada de un proyecto individual.
- **Propiedades**:
  - `project`: Objeto completo del proyecto
  - `showRelated`: Mostrar proyectos relacionados
  - `showContactCTA`: Mostrar llamada a la acción de contacto
- **Consideraciones técnicas**:
  - Puede ser componente servidor si no incluye interactividad
  - Galería de imágenes optimizada
  - Estructura rica en metadatos para SEO

### 2.4. Testimonios

#### 2.4.1. TestimonialsSection
- **Descripción**: Sección para mostrar testimonios de clientes.
- **Propiedades**:
  - `testimonials`: Array de testimonios
  - `layout`: Tipo de visualización ('slider', 'grid', 'featured')
  - `title`: Título de la sección
  - `subtitle`: Subtítulo o descripción
- **Consideraciones técnicas**:
  - **Directiva "use client"** si implementa slider
  - Integración con Strapi para gestión de testimonios
  - Posible implementación de rotación automática

#### 2.4.2. TestimonialCard
- **Descripción**: Tarjeta individual para un testimonio.
- **Propiedades**:
  - `quote`: Texto del testimonio
  - `author`: Nombre del autor
  - `position`: Cargo o empresa
  - `avatar`: Imagen del autor
  - `rating`: Valoración numérica (opcional)
- **Consideraciones técnicas**:
  - Componente de servidor (a menos que incluya interactividad)
  - Diseño enfocado en legibilidad y credibilidad
  - Posible variante destacada para testimonios principales

### 2.5. Formulario de Contacto

#### 2.5.1. ContactForm (Cliente)
- **Descripción**: Formulario completo de contacto con validación.
- **Propiedades**:
  - `defaultValues`: Valores iniciales (opcional)
  - `services`: Servicios disponibles para seleccionar
  - `onSuccess`: Callback tras envío exitoso
  - `layout`: Disposición ('standard', 'compact', 'full')
- **Consideraciones técnicas**:
  - **Directiva "use client"** requerida (formulario interactivo)
  - Implementar con React Hook Form + Zod para validación
  - Estados de carga y éxito/error
  - Protección contra spam (CAPTCHA/honeypot)

#### 2.5.2. FormField (Cliente)
- **Descripción**: Campo de formulario reutilizable con estilos consistentes.
- **Propiedades**:
  - `name`: Nombre del campo
  - `label`: Etiqueta visible
  - `type`: Tipo de input ('text', 'email', 'select', etc.)
  - `placeholder`: Texto de placeholder
  - `required`: Si es requerido
  - `error`: Mensaje de error
  - `options`: Opciones para select/radio/checkbox
- **Consideraciones técnicas**:
  - **Directiva "use client"** requerida
  - Compatible con React Hook Form
  - Estilos consistentes con la identidad de marca
  - Accesibilidad (WAI-ARIA)

#### 2.5.3. SuccessMessage
- **Descripción**: Mensaje de confirmación tras envío exitoso.
- **Propiedades**:
  - `title`: Título del mensaje
  - `message`: Texto detallado
  - `resetForm`: Función para reiniciar formulario
- **Consideraciones técnicas**:
  - Puede ser componente servidor si no maneja reset
  - Animación de entrada suave
  - CTA secundaria (volver a inicio, explorar servicios)

## 3. Componentes de UI Adicionales

### 3.1. Botones y Controles (Existentes y Nuevos)

#### 3.1.1. Button (Existente)
- Ya implementado con variantes y tamaños

#### 3.1.2. IconButton
- **Descripción**: Botón solo con icono.
- **Propiedades**: Similar a Button pero centrado en icono
- **Directiva "use client"** solo si maneja eventos

#### 3.1.3. ButtonGroup
- **Descripción**: Grupo de botones con estilos consistentes.
- **Propiedades**:
  - `children`: Botones a agrupar
  - `align`: Alineación ('left', 'center', 'right')
  - `spacing`: Espaciado entre botones
- **Directiva "use client"** solo si maneja eventos

### 3.2. Tarjetas y Contenedores

#### 3.2.1. Card
- **Descripción**: Componente de tarjeta genérico.
- **Propiedades**:
  - `children`: Contenido
  - `variant`: Estilo ('elevated', 'outlined', 'filled')
  - `padding`: Padding interno
  - `radius`: Radio de borde
- **Componente de servidor** (a menos que tenga interactividad)

#### 3.2.2. Tabs (Cliente)
- **Descripción**: Sistema de pestañas.
- **Propiedades**:
  - `tabs`: Array of objects tab {id, label, content}
  - `defaultTab`: Tab active initially
  - `onChange`: Callback when tab changes
- **Directiva "use client"** requerida

### 3.3. Feedback y Notificaciones

#### 3.3.1. Alert
- **Descripción**: Componente de alerta/notificación.
- **Propiedades**:
  - `type`: Type ('success', 'error', 'warning', 'info')
  - `title`: Title of the alert
  - `message`: Content
  - `dismissible`: If it can be closed
- **Directiva "use client"** solo si es dismissible

#### 3.3.2. Toast (Cliente)
- **Descripción**: Sistema de notificaciones toast.
- **Propiedades**:
  - Implementar como custom hook and context
- **Directiva "use client"** requerida

## 4. Plan de Implementación

### 4.1. Priorización de Componentes

1. **Alta prioridad** (implementar primero):
   - ServicesGrid and ServiceCard
   - ProjectsGrid and ProjectCard (basic version)
   - ContactForm (functional but simple)

2. **Prioridad media**:
   - Structure components (PageHeader, Container, Section)
   - TestimonialsSection
   - Additional UI components

3. **Refinamiento** (after basic functionality):
   - Advanced filters for projects
   - Animations and transitions
   - Visual improvements

**Matriz de Priorización Detallada**:

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

### 4.2. Consideraciones Técnicas Generales

1. **Client/server division**:
   - Identify clearly which components need "use client"
   - Minimize JS sent to client
   - Create clear boundaries between client and server components
   
   **Diagrama de Arquitectura Cliente/Servidor**:
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

2. **Integration with Strapi**:
   - Define necessary data/model types
   - Implement service layer for each type of content
   - Handle caching and revalidation appropriately

3. **Accessibility**:
   - Test with screen readers
   - Ensure sufficient color contrast
   - Implement appropriate keyboard navigation
   - Use semantic elements

4. **Performance**:
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

5. **Estrategia de Testing**:
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

### 4.3. Estimated Timeline

- **Week 1**: Structure and basic UI components
- **Week 2**: Services and basic project components
- **Week 3**: Testimonials and contact form
- **Week 4**: Refinement, animations and testing

## 5. Implementation Examples

### 5.1. Example of ServicesGrid (Server Component)

```tsx
// src/components/sections/ServicesGrid.tsx
import { getServices } from '@/services/strapi';
import ServiceCard from './ServiceCard';

interface ServicesGridProps {
  columns?: 1 | 2 | 3 | 4;
  showDetails?: boolean;
  featured?: boolean;
}

export default async function ServicesGrid({ 
  columns = 3, 
  showDetails = true,
  featured = false
}: ServicesGridProps) {
  // Obtener servicios desde Strapi en servidor
  const services = await getServices();
  
  // Filtrar solo servicios destacados si es necesario
  const displayedServices = featured 
    ? services.filter(service => service.attributes.featured) 
    : services;
  
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {displayedServices.map((service) => (
        <ServiceCard 
          key={service.id}
          title={service.attributes.title}
          description={service.attributes.description}
          icon={service.attributes.icon}
          link={`/servicios/${service.attributes.slug}`}
          showDetails={showDetails}
        />
      ))}
    </div>
  );
}
```

### 5.2. Example of ProjectsFilter (Client Component)

```tsx
// src/components/sections/ProjectsFilter.tsx
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

interface ProjectsFilterProps {
  categories: {id: string; name: string}[];
  technologies: {id: string; name: string}[];
  onFilterChange: (filters: FilterValues) => void;
}

interface FilterValues {
  categories: string[];
  technologies: string[];
  searchQuery: string;
}

export default function ProjectsFilter({ 
  categories, 
  technologies, 
  onFilterChange 
}: ProjectsFilterProps) {
  const { register, handleSubmit, reset } = useForm<FilterValues>({
    defaultValues: {
      categories: [],
      technologies: [],
      searchQuery: '',
    }
  });

  const onSubmit = (data: FilterValues) => {
    onFilterChange(data);
  };

  const resetFilters = () => {
    reset({
      categories: [],
      technologies: [],
      searchQuery: '',
    });
    onFilterChange({
      categories: [],
      technologies: [],
      searchQuery: '',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-8">
      {/* Búsqueda */}
      <div>
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="w-full p-2 border rounded-md"
          {...register('searchQuery')}
        />
      </div>
      
      {/* Categorías */}
      <div>
        <h3 className="text-lg font-medium mb-2">Categorías</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <label key={category.id} className="inline-flex items-center">
              <input
                type="checkbox"
                value={category.id}
                {...register('categories')}
                className="mr-2"
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>
      
      {/* Tecnologías */}
      <div>
        <h3 className="text-lg font-medium mb-2">Tecnologías</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <label key={tech.id} className="inline-flex items-center">
              <input
                type="checkbox"
                value={tech.id}
                {...register('technologies')}
                className="mr-2"
              />
              {tech.name}
            </label>
          ))}
        </div>
      </div>
      
      {/* Acciones */}
      <div className="flex gap-4">
        <Button type="submit" variant="primary">
          Aplicar filtros
        </Button>
        <Button type="button" variant="outline" onClick={resetFilters}>
          Resetear
        </Button>
      </div>
    </form>
  );
}
```

### 5.3. Example of ContactForm (Client Component)

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

These examples illustrate how to implement components both on server and client, following best practices for Next.js 15. 

## 6. Estrategia de Accesibilidad (WCAG 2.1)

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

## 7. Optimización para Buscadores (SEO)

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

## 8. Análisis y Monitoreo

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

## 9. Estrategia de Internacionalización (i18n)

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

## 10. Guía de Estilo y Convenciones

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