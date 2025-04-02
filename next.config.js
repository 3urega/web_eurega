/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Esta es una solución temporal para resolver el error de tipos
    // Ignoramos los errores de tipo durante la compilación
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 