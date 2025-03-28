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

### 4.2. Consideraciones Técnicas Generales

1. **Client/server division**:
   - Identify clearly which components need "use client"
   - Minimize JS sent to client
   - Create clear boundaries between client and server components

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
   - Optimize images
   - Implement lazy loading for heavy components
   - Minimize unnecessary re-renders
   - Measure and optimize Web Vitals

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

These examples illustrate how to implement components both on server and client, following best practices for Next.js 15. 