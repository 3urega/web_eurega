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
module.exports = {};
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

## Solución al Error de PowerShell

Si encuentras este error al intentar ejecutar comandos en PowerShell:

```
At line:1 char:15
+ cd eurega-cms && npm run develop
+               ~~
The token '&&' is not a valid statement separator in this version.
```

Esto ocurre porque PowerShell no utiliza `&&` para encadenar comandos como lo hacen Bash o CMD. En su lugar, ejecuta los comandos por separado:

```powershell
cd eurega-cms
npm run develop
```

O utiliza el operador de encadenamiento de PowerShell:

```powershell
cd eurega-cms; npm run develop
```

## Solución al Error 404 al Conectar con Strapi

Si encuentras un error como este en tu aplicación Next.js:

```
Error: Error 404: Not Found
    at fetchAPI (...)
    at async getServices (...)
    at async ServicesGrid (...)
```

### Causas del Error 404

Este error ocurre cuando tu aplicación Next.js intenta conectarse a la API de Strapi pero no encuentra el endpoint solicitado. Las causas posibles son:

1. **Strapi no está en ejecución**: La instancia de Strapi no está activa en el puerto 1337.
2. **El tipo de contenido "services" no existe**: No has creado la colección "Service" en Strapi.
3. **La API pública no está configurada**: Los permisos para acceder a los servicios no están habilitados.
4. **Error en la ruta de la API**: La URL de conexión a Strapi es incorrecta.

### Solución Paso a Paso

#### 1. Verifica que Strapi esté funcionando

Asegúrate de que Strapi está en ejecución:

```powershell
cd eurega-cms
npm run develop
```

Comprueba que puedes acceder al panel de administración en:
```
http://localhost:1337/admin
```

#### 2. Crea la colección "Service" en Strapi

En el panel de administración:

1. Ve a "Content-Type Builder" en el menú lateral
2. Haz clic en "Create new collection type"
3. Nombra la colección "Service" (¡importante usar este nombre exacto!)
4. Añade los campos necesarios:
   - title (Texto corto)
   - description (Texto largo)
   - icon (Texto corto)
   - slug (Texto corto, único)
   - featured (Booleano)
   - features (JSON) - **¡Importante!** Este campo debe ser tipo JSON, no array de textos
5. Guarda la colección

#### 3. Configura los permisos públicos

Para que la API sea accesible:

1. Ve a "Settings" → "Users & Permissions Plugin" → "Roles"
2. Edita el rol "Public"
3. Busca "Service" y habilita los permisos "find" y "findOne"
4. Guarda la configuración

#### 4. Crea servicios de ejemplo

1. Ve a "Content Manager" → "Service"
2. Haz clic en "Create new entry"
3. Rellena los campos con datos de ejemplo
4. Para el campo "features", introduce un array JSON como este:
   ```json
   ["Característica 1", "Característica 2", "Característica 3"]
   ```
5. Guarda y publica

#### 5. Verifica que la API funciona

Prueba directamente la API en tu navegador:
```
http://localhost:1337/api/services
```

Si ves datos JSON con tus servicios, significa que la API está funcionando correctamente.

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
| features | JSON | Lista de características (array JSON) |

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
| technologies | JSON | Tecnologías utilizadas (array JSON) |

### 3. Formulario de Contacto (Opcional)

Si quieres que los formularios de contacto se guarden en Strapi:

1. Crea una colección "ContactForm" con:
   - name (Texto)
   - email (Email)
   - message (Texto largo)
   - subject (Texto)
   - company (Texto, opcional)

2. Configura los permisos para permitir la creación desde la API pública

## Consideraciones para el código

### Manejo del campo "features" como JSON

En tu código, asegúrate de que el componente ServiceCard y cualquier otro componente que muestre las características de un servicio sea capaz de manejar el campo "features" como un array JSON. Por ejemplo:

```typescript
// Si antes tenías algo así en ServiceCard.tsx:
{features.map((feature, index) => (
  <li key={index}>{feature}</li>
))}

// Asegúrate de que features es realmente un array:
{Array.isArray(features) && features.map((feature, index) => (
  <li key={index}>{feature}</li>
))}
```

### Respaldo en caso de datos faltantes

Es buena práctica proporcionar valores por defecto para cuando los datos de Strapi no estén disponibles:

```typescript
const features = service.attributes.features || [];
// O más seguro:
const features = Array.isArray(service.attributes.features) 
  ? service.attributes.features 
  : [];
```

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