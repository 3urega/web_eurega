# 🚀 Strapi CMS para Eurega

Este directorio contiene el backend desarrollado con Strapi CMS para la plataforma web de Eurega.

## Tecnologías Utilizadas

- **Strapi**: Framework headless CMS
- **PostgreSQL**: Base de datos relacional
- **Node.js**: Entorno de ejecución

## Requisitos Previos

- Node.js (v18+)
- NPM o Yarn
- PostgreSQL (v14+)

## Configuración del Entorno

### Base de Datos PostgreSQL

1. Asegúrate de tener PostgreSQL instalado y en ejecución
2. Crea una base de datos para el proyecto:

```sql
CREATE DATABASE eurega;
CREATE USER eurega_user WITH ENCRYPTED PASSWORD 'tu_contraseña';
GRANT ALL PRIVILEGES ON DATABASE eurega TO eurega_user;
```

### Variables de Entorno

Copia el archivo `.env.example` a `.env` y actualiza las variables:

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=tu_app_key_1,tu_app_key_2
API_TOKEN_SALT=tu_api_token_salt
ADMIN_JWT_SECRET=tu_admin_jwt_secret
TRANSFER_TOKEN_SALT=tu_transfer_token_salt
JWT_SECRET=tu_jwt_secret

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=eurega
DATABASE_USERNAME=eurega_user
DATABASE_PASSWORD=tu_contraseña
DATABASE_SSL=false
```

## Comandos Disponibles

### `develop`

Inicia la aplicación Strapi en modo desarrollo con recarga automática:

```
npm run develop
# o
yarn develop
```

### `start`

Inicia la aplicación Strapi en modo producción:

```
npm run start
# o
yarn start
```

### `build`

Compila el panel de administración:

```
npm run build
# o
yarn build
```

## Estructura de Contenido

El CMS está configurado con los siguientes tipos de contenido:

- **Páginas**: Contenido de las diferentes secciones del sitio
- **Noticias/Blog**: Artículos y entradas de blog
- **Servicios**: Información sobre los servicios ofrecidos
- **Equipo**: Miembros del equipo
- **Configuración Global**: Configuraciones generales del sitio

## Personalización

Para personalizar la estructura de datos:

1. Accede al panel de administración: `http://localhost:1337/admin`
2. Ve a "Content-Type Builder" para crear o modificar modelos
3. Define los campos y relaciones según las necesidades del proyecto

## Despliegue

Para desplegar Strapi en un entorno de producción:

1. Configura las variables de entorno para producción
2. Ejecuta el build: `npm run build` o `yarn build`
3. Inicia el servidor: `npm run start` o `yarn start`

Considera utilizar servicios como Heroku, Digital Ocean o AWS para el despliegue.

## Recursos Adicionales

- [Documentación oficial de Strapi](https://docs.strapi.io)
- [Tutoriales de Strapi](https://strapi.io/tutorials)
- [Blog de Strapi](https://strapi.io/blog)
- [Comunidad de Strapi en Discord](https://discord.strapi.io)

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
