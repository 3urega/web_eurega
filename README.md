# Eurega - Plataforma Web Corporativa

Este proyecto consiste en una plataforma web corporativa completa desarrollada con tecnologías modernas:

- **Frontend**: Aplicación Next.js (React)
- **Backend**: Strapi CMS
- **Base de datos**: PostgreSQL

## Estructura del Proyecto

```
eurega/
├── eurega-cms/        # Backend Strapi
└── frontend/          # Frontend Next.js
```

## Requisitos Previos

- Node.js (v18+)
- NPM o Yarn
- PostgreSQL (v14+)
- Git

## Configuración del Entorno

### 1. Base de Datos PostgreSQL

1. Instala PostgreSQL si aún no lo tienes
2. Crea una base de datos para el proyecto:

```sql
CREATE DATABASE eurega;
CREATE USER eurega_user WITH ENCRYPTED PASSWORD 'tu_contraseña';
GRANT ALL PRIVILEGES ON DATABASE eurega TO eurega_user;
```

### 2. Backend (Strapi CMS)

Navega al directorio del backend:

```bash
cd eurega-cms
```

Instala las dependencias:

```bash
npm install
# o
yarn install
```

Configura las variables de entorno:

1. Copia el archivo `.env.example` a `.env`
2. Actualiza las variables relacionadas con la base de datos:

```
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=eurega
DATABASE_USERNAME=eurega_user
DATABASE_PASSWORD=tu_contraseña
```

Inicia el servidor de desarrollo:

```bash
npm run develop
# o
yarn develop
```

El panel de administración de Strapi estará disponible en [http://localhost:1337/admin](http://localhost:1337/admin)

### 3. Frontend (Next.js)

Navega al directorio del frontend:

```bash
cd ../frontend
```

Instala las dependencias:

```bash
npm install
# o
yarn install
```

Configura las variables de entorno:

1. Copia el archivo `.env.example` a `.env.local`
2. Actualiza las variables según sea necesario:

```
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TIMEOUT=5000
```

Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

La aplicación web estará disponible en [http://localhost:3000](http://localhost:3000)

## Desarrollo

### Flujo de Trabajo

1. El contenido se gestiona a través del panel de administración de Strapi
2. La API de Strapi proporciona los datos al frontend
3. El frontend en Next.js renderiza el contenido

### Personalizando el Contenido

1. Accede al panel de administración de Strapi: [http://localhost:1337/admin](http://localhost:1337/admin)
2. Crea o modifica los tipos de contenido según necesites
3. Añade contenido a través de la interfaz de administración

## Despliegue

### Backend (Strapi)

Para desplegar Strapi en producción:

```bash
cd eurega-cms
npm run build
npm run start
# o
yarn build
yarn start
```

Considera utilizar un servicio como Heroku, Digital Ocean o AWS para el despliegue de producción.

### Frontend (Next.js)

Para compilar y desplegar el frontend:

```bash
cd frontend
npm run build
npm run start
# o
yarn build
yarn start
```

Para un despliegue más sencillo, considera utilizar [Vercel](https://vercel.com) (los creadores de Next.js).

## Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Strapi](https://docs.strapi.io)
- [Documentación de PostgreSQL](https://www.postgresql.org/docs/)

## Licencia

Este proyecto es privado y su uso está restringido a Eurega.
