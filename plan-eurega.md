# Plan de Desarrollo Web Corporativa - eurega

## Contexto
Este plan detalla la creación de una web corporativa pequeña pero efectiva para un programador freelance. El desarrollador ha decidido no operar bajo su nombre personal, sino bajo la marca "eurega" que ha creado. El objetivo principal es mostrar sus capacidades profesionales y atraer potenciales clientes a través de una presencia web profesional.

## Plan para desarrollar la web corporativa de "eurega"

### 1. Diseño y planificación
- **Definir la identidad de marca "eurega"**:
  - Desarrollar logotipo y paleta de colores
  - Establecer el tono y voz de la marca
  - Definir los valores y propuesta de valor única
- **Planificar la estructura del sitio**:
  - Página principal (Home)
  - Servicios/Habilidades
  - Portafolio de proyectos
  - Sobre "eurega"
  - Contacto
  - Blog (opcional pero recomendado)

### 2. Configuración del proyecto (ya iniciado)
- El proyecto ya está configurado con Next.js 15, React 19 y TailwindCSS 4
- Complementar con bibliotecas adicionales según necesidad:
  - Framer Motion para animaciones
  - React Hook Form para formularios
  - Nodemailer para envío de correos
  - Posiblemente un CMS headless como Contentful o Sanity

### 3. Desarrollo de componentes principales
- **Layout común** (header, footer, navegación)
- **Sección Hero** impactante para la página principal
- **Sección de servicios** destacando especialidades
- **Galería de proyectos** con filtros y detalles
- **Componente de testimonios/valoraciones**
- **Formulario de contacto** funcional

### 4. Implementación página por página
- **Home**: Destacar mensaje principal y llamada a la acción
- **Servicios**: Detallar cada servicio con beneficios para el cliente
- **Portafolio**: Mostrar proyectos con descripción, tecnologías y resultados
- **Sobre eurega**: Historia, filosofía, proceso de trabajo
- **Contacto**: Formulario, información de contacto, disponibilidad
- **Blog** (opcional): Sistema para publicar artículos técnicos

### 5. Optimización y mejora
- **SEO**: Metadatos, estructuras de datos, sitemap
- **Rendimiento**: Optimización de imágenes, lazy loading
- **Accesibilidad**: Cumplir con WCAG 2.1
- **Responsive**: Asegurar experiencia perfecta en todos los dispositivos
- **Animaciones**: Añadir animaciones sutiles pero efectivas

### 6. Pruebas y lanzamiento
- Pruebas en diferentes navegadores y dispositivos
- Revisión de enlaces, formularios y funcionalidades
- Implementación de analytics (Google Analytics/Plausible/Umami)
- Despliegue en plataforma (Vercel, Netlify, etc.)

### 7. Mantenimiento y actualización
- Plan para actualizaciones periódicas de contenido
- Posible integración con redes sociales
- Análisis de métricas y mejora continua

## Próximos pasos inmediatos

1. Crear los componentes básicos de UI (navbar, footer, layout)
2. Implementar la página principal con una sección hero impactante
3. Establecer la estructura de carpetas para las demás páginas
4. Diseñar la sección de portafolio para mostrar las capacidades profesionales

## Objetivos específicos para una web freelance

Como desarrollador freelance operando bajo la marca "eurega", la web debe:

- Transmitir profesionalismo y confiabilidad
- Destacar la experiencia técnica y especialización
- Mostrar proyectos previos con resultados tangibles
- Facilitar el proceso de contacto y contratación
- Diferenciar "eurega" de otros servicios freelance
- Comunicar el valor añadido y metodología de trabajo 

## ⚠️ IMPORTANTE: Arquitectura de Componentes en Next.js 15

Para prevenir errores en el desarrollo del proyecto, es crucial tener en cuenta la arquitectura de componentes cliente/servidor de Next.js 15:

### Consideraciones clave:
- **Componentes de Servidor vs Cliente**: En Next.js 15 con App Router, todos los componentes son de servidor por defecto.
- **Directiva "use client"**: Cualquier componente que utilice hooks de React (`useState`, `useEffect`, `useContext`, etc.) DEBE iniciar con la directiva `"use client"` al principio del archivo.
- **Componentes que requieren "use client"**:
  - Componentes con interactividad (menús desplegables, formularios, etc.)
  - Componentes que utilizan eventos del navegador
  - Componentes que utilizan APIs del navegador
  - Componentes con animaciones controladas por estado
  - Componentes que utilizan React Context

### Estrategia recomendada:
1. Dividir claramente los componentes que son puramente presentacionales (servidor) de los interactivos (cliente)
2. Minimizar el uso de `"use client"` para mejorar rendimiento y SEO
3. Crear componentes contenedores (cliente) que envuelvan componentes presentacionales (servidor)
4. Para componentes con Framer Motion, always añadir `"use client"`
5. Verificar todos los componentes de UI interactivos (como el Header) para asegurar que tienen la directiva adecuada

Este enfoque prevendrá errores comunes y optimizará el rendimiento de la aplicación. 