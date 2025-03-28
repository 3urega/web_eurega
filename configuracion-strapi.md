# Configuración de Strapi para el Proyecto Eurega

Este documento explica paso a paso cómo configurar y utilizar Strapi como CMS headless para el proyecto Eurega.

## Arquitectura del Proyecto

El proyecto consta de dos aplicaciones separadas:

1. **Aplicación Next.js** (directorio principal): Frontend que consume datos de Strapi
2. **Aplicación Strapi** (directorio `/eurega-cms`): Backend CMS headless

## Requisitos Previos

- Node.js (versión 18.x o superior)
- NPM o Yarn
- Suficiente espacio en disco para la base de datos SQLite

## Iniciar y Configurar Strapi

### 1. Iniciar el Servidor de Desarrollo de Strapi

```bash
cd eurega-cms
npm run develop
```

> **Nota**: A diferencia de la aplicación Next.js, el comando para iniciar Strapi es `develop` y no `dev`.

La primera vez que inicies Strapi, se te pedirá crear un usuario administrador. Completa la información solicitada:
- Nombre de usuario
- Contraseña (mínimo 8 caracteres)
- Email

### 2. Acceder al Panel de Administración

Una vez iniciado el servidor, accede al panel de administración en:
```
http://localhost:1337/admin
```

## Solución al Error de PostCSS

Si al iniciar Strapi encuentras el siguiente error:

```
Failed to load PostCSS config: Failed to load PostCSS config (searchPath: C:/Users/mfarres/Desktop/projects/eurega/webs/eurega/eurega-cms): [TypeError] Invalid PostCSS Plugin found at: plugins[0]
```

Este error ocurre porque Strapi está intentando usar la configuración de PostCSS de la aplicación Next.js. Para solucionarlo:

### Opción 1: Crear un archivo postcss.config.js específico para Strapi

1. Crea un archivo `postcss.config.js` en el directorio `eurega-cms`:

```bash
cd eurega-cms
touch postcss.config.js
```

2. Edita el archivo con el siguiente contenido:

```javascript
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
  }
};
```

### Opción 2: Ajustar las variables de entorno

Alternativamente, puedes modificar el archivo `.env` en el directorio `eurega-cms` para que Strapi ignore la configuración de PostCSS del proyecto principal:

```
VITE_SKIP_POSTCSS_CONFIG=true
```

Después de aplicar cualquiera de estas soluciones, intenta iniciar Strapi nuevamente:

```bash
npm run develop
```

## Crear los Tipos de Contenido Necesarios

La aplicación Next.js espera los siguientes tipos de contenido en Strapi:

### 1. Servicios (Service)

Crea una colección "Service" con los siguientes campos:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| title | Texto (corto) | Título del servicio |
| description | Texto (largo) | Descripción del servicio |
| icon | Texto (corto) | Código HTML/SVG del icono (o ruta) |
| slug | Texto (corto) | URL amigable (único) |
| featured | Booleano | Si aparece en destacados |
| features | Array de textos | Características del servicio |

### 2. Proyectos (Project)

Crea una colección "Project" con los siguientes campos:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| title | Texto (corto) | Título del proyecto |
| description | Texto (largo) | Descripción del proyecto |
| image | Medio (imagen) | Imagen principal del proyecto |
| slug | Texto (corto) | URL amigable (único) |
| featured | Booleano | Si aparece en destacados |
| category | Texto (corto) | Categoría del proyecto |
| client | Texto (corto) | Nombre del cliente |
| technologies | Array de textos | Tecnologías utilizadas |

### 3. Formulario de Contacto (Opcional)

Si quieres que los formularios de contacto se guarden en Strapi:

1. Crea una colección "ContactForm" con:
   - name (Texto)
   - email (Email)
   - message (Texto largo)
   - subject (Texto)
   - company (Texto, opcional)

2. Configura los permisos para permitir la creación desde la API pública

## Configuración de Permisos

Para cada tipo de contenido, configura los permisos adecuados:

1. Ve a "Settings" → "Users & Permissions Plugin" → "Roles"
2. Edita el rol "Public"
3. Para cada tipo de contenido, habilita los permisos necesarios:
   - Services: find, findOne
   - Projects: find, findOne
   - ContactForm: create

4. Guarda la configuración

## Crear Contenido de Ejemplo

Una vez configurados los tipos de contenido, crea al menos:
- 3 servicios (asegúrate de marcar al menos uno como "featured")
- 4-6 proyectos en diferentes categorías

## Conexión con Next.js

La aplicación Next.js ya está configurada para conectarse a Strapi a través de:

```
http://localhost:1337
```

Los parámetros de conexión están definidos en el archivo `.env.local`.

## Solución de Problemas Comunes

### Strapi no inicia

Si encuentras errores al iniciar Strapi:

1. Verifica que estás en el directorio correcto (`eurega-cms`)
2. Asegúrate de que todas las dependencias están instaladas:
   ```bash
   npm install
   ```
3. Si hay conflictos con la base de datos, puedes reiniciarla:
   ```bash
   rm -rf .tmp
   npm run develop
   ```
4. Si tienes problemas con módulos o dependencias, prueba con:
   ```bash
   rm -rf node_modules
   npm cache clean --force
   npm install
   ```

### Next.js no muestra datos de Strapi

1. Asegúrate de que Strapi está en ejecución
2. Verifica que los tipos de contenido tienen los campos correctos
3. Comprueba los permisos de acceso público
4. Revisa la consola del navegador y del servidor para errores
5. Prueba la API directamente:
   ```
   http://localhost:1337/api/services
   http://localhost:1337/api/projects
   ```

### Errores de CORS

Si hay errores de CORS, configura Strapi para permitir solicitudes desde Next.js:

1. Ve a "Settings" → "Global Settings" → "CORS"
2. Añade `http://localhost:3000` a los orígenes permitidos

## Conflictos entre Next.js y Strapi

Al tener ambas aplicaciones en el mismo repositorio, pueden surgir conflictos entre sus configuraciones. Algunas soluciones:

1. **Mantén configuraciones separadas**: Asegúrate de que los archivos de configuración como `postcss.config.js`, `tailwind.config.js`, etc., estén específicamente en cada subdirectorio.

2. **Usa diferentes puertos**: Verifica que Strapi (puerto 1337) y Next.js (puerto 3000) no tengan conflictos.

3. **Aísla las dependencias**: Evita instalar paquetes a nivel global; instálalos siempre en el directorio correspondiente.

## Despliegue en Producción

Para un entorno de producción:

1. Configura una base de datos más robusta (PostgreSQL, MySQL)
2. Actualiza las variables de entorno en ambas aplicaciones
3. Configura un proxy inverso (Nginx, Apache) para servir ambas aplicaciones
4. Habilita HTTPS

## Recursos Adicionales

- [Documentación oficial de Strapi](https://docs.strapi.io)
- [Guía de integración con Next.js](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi) 