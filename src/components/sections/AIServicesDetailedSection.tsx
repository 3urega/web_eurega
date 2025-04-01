"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

interface AIServicesDetailedSectionProps {
  showHeaderAndFooter?: boolean;
}

export default function AIServicesDetailedSection({ showHeaderAndFooter = true }: AIServicesDetailedSectionProps) {
  return (
    <>
      {/* Header con CTA prominente - opcional */}
      {showHeaderAndFooter && (
        <Section background="bg-gradient-to-b from-purple-100 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforma tu Negocio con Inteligencia Artificial
              </h1>
              <p className="text-xl text-gray-800 mb-8">
                Somos expertos en implementar soluciones de IA que <span className="text-purple-700 font-semibold">automatizan procesos</span>, 
                <span className="text-purple-700 font-semibold"> optimizan operaciones</span> y 
                <span className="text-purple-700 font-semibold"> aumentan tus ingresos</span>.
              </p>
              <Button href="/contacto" variant="primary" size="lg">
                Solicitar Consultoría Gratuita
              </Button>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Servicio 1: Integración de Agentes de IA */}
      <Section background="bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="order-2 md:order-1">
              <div className="bg-purple-50 p-2 inline-block rounded-xl mb-4">
                <span className="text-4xl">🤖</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Integración de Agentes de IA</h2>
              <p className="text-gray-800 text-lg mb-6">
                Automatiza y optimiza procesos con agentes inteligentes que aprenden y mejoran con el tiempo.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-purple-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Aumenta la eficiencia</span> en atención al cliente, gestión interna y más.</p>
                </div>
                <div className="flex items-start">
                  <div className="text-purple-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Personalización total</span> según las necesidades de tu negocio.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-800 font-medium">
                  <span className="text-purple-700 font-bold">➡️ Ejemplo:</span> Integramos agentes en plataformas como CRMs, ERPs o e-commerce para potenciar la automatización y toma de decisiones.
                </p>
              </div>
              
              <Button href="/servicios/integracion-ia" variant="outline">
                Descubrir más sobre este servicio
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="order-1 md:order-2">
              <div className="relative h-[350px] bg-gradient-to-r from-purple-100 to-indigo-50 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-purple-500 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-semibold">Automatización Inteligente</p>
                  <p className="opacity-90">Reduce costos operativos hasta un 40%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Servicio 2: Desarrollo de Proyectos con IA */}
      <Section background="bg-gray-50">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="relative h-[350px] bg-gradient-to-r from-blue-100 to-cyan-50 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-semibold">Innovación a medida</p>
                  <p className="opacity-90">Tu idea transformada en realidad</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="bg-blue-50 p-2 inline-block rounded-xl mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Desarrollo de Proyectos con IA desde Cero</h2>
              <p className="text-gray-800 text-lg mb-6">
                Te ayudamos a construir soluciones innovadoras basadas en IA desde la idea hasta el producto final.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Asesoría experta</span> en definición del producto y validación de mercado.</p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Desarrollo</span> con tecnologías de IA de última generación.</p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Escalabilidad</span> y soporte continuo.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-800 font-medium">
                  <span className="text-blue-700 font-bold">➡️ Ejemplo:</span> Creamos plataformas de recomendación, motores de búsqueda inteligentes, asistentes conversacionales y más.
                </p>
              </div>
              
              <Button href="/servicios/desarrollo-ia" variant="outline">
                Descubrir más sobre este servicio
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Servicio 3: Chatbots y Asistentes */}
      <Section background="bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="order-2 md:order-1">
              <div className="bg-green-50 p-2 inline-block rounded-xl mb-4">
                <span className="text-4xl">💬</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Chatbots y Asistentes Virtuales</h2>
              <p className="text-gray-800 text-lg mb-6">
                Mejora la experiencia del usuario con chatbots de IA que responden en tiempo real y automatizan tareas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Soporte 24/7</span> con respuestas inteligentes.</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Integración</span> con WhatsApp, Messenger, Slack y sitios web.</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Reducción de costos</span> operativos y mejora en atención al cliente.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-800 font-medium">
                  <span className="text-green-700 font-bold">➡️ Ejemplo:</span> Implementamos chatbots con IA para ventas, soporte técnico y generación de leads.
                </p>
              </div>
              
              <Button href="/servicios/chatbots-ia" variant="outline">
                Descubrir más sobre este servicio
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="order-1 md:order-2">
              <div className="relative h-[350px] bg-gradient-to-r from-green-100 to-emerald-50 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-semibold">Conversaciones Inteligentes</p>
                  <p className="opacity-90">Aumenta la satisfacción del cliente</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Servicio 4: Web Scraping */}
      <Section background="bg-gray-50">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="relative h-[350px] bg-gradient-to-r from-amber-100 to-yellow-50 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-amber-500 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-semibold">Datos Inteligentes</p>
                  <p className="opacity-90">Información procesada y adaptada</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="bg-amber-50 p-2 inline-block rounded-xl mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Scraping con IA: Captura y Adapta Contenido</h2>
              <p className="text-gray-800 text-lg mb-6">
                Obtén información valiosa y genera contenido dinámico para tu sitio web de forma automatizada.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-amber-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Extracción de datos</span> de múltiples fuentes.</p>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Adaptación inteligente</span> del contenido para tu negocio.</p>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-600 mr-3 mt-1">👉</div>
                  <p className="text-gray-800"><span className="font-semibold">Cumplimiento</span> de normativas y privacidad de datos.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-800 font-medium">
                  <span className="text-amber-700 font-bold">➡️ Ejemplo:</span> Implementamos scraping con IA para e-commerce, noticias, comparadores de precios y más.
                </p>
              </div>
              
              <Button href="/servicios/web-scraping-ia" variant="outline">
                Descubrir más sobre este servicio
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Final - opcional */}
      {showHeaderAndFooter && (
        <Section background="bg-gradient-to-b from-white to-purple-100">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Listo para transformar tu negocio con IA?
              </h2>
              <p className="text-xl text-gray-800 mb-8">
                Nuestro equipo de expertos está preparado para analizar tu proyecto y ofrecerte la mejor solución adaptada a tus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contacto" variant="primary" size="lg">
                  Solicitar consultoría gratuita
                </Button>
                <Button href="/guia-seo-ia" variant="outline" size="lg">
                  Guía SEO para proyectos de IA
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      )}
    </>
  );
} 