This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Configuración de Strapi CMS

Este proyecto utiliza Strapi como CMS para gestionar contenido. Para configurar y ejecutar Strapi:

1. Asegúrate de tener instalado Node.js (v18+) y npm/yarn
2. Navega al directorio de Strapi:

```bash
cd eurega-cms
```

3. Instala las dependencias:

```bash
npm install
# o
yarn install
```

4. Inicia el servidor de desarrollo:

```bash
npm run develop
# o
yarn develop
```

El panel de administración de Strapi estará disponible en [http://localhost:1337/admin](http://localhost:1337/admin)

### Manejo de errores de conexión

Si experimentas errores de conexión con Strapi, asegúrate de que:

1. El servidor de Strapi esté en ejecución en `http://localhost:1337`
2. Las variables de entorno estén configuradas correctamente (copia `.env.example` a `.env.local`)
3. No haya bloqueos de firewall o problemas de red

Si Strapi no está disponible, la aplicación usará datos de ejemplo para mostrar contenido de muestra.

## Variables de entorno

Copia el archivo `.env.example` a `.env.local` y ajusta las variables según sea necesario:

```
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TIMEOUT=5000
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
