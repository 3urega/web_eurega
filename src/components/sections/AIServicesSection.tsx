"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.2
    }
  }
};

export default function AIServicesSection() {
  return (
    <Section background="bg-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6"
          >
            Potencia tu negocio con IA de vanguardia
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="max-w-3xl mx-auto text-xl text-gray-800 font-medium"
          >
            Somos una consultora especializada en el desarrollo e integración de soluciones de Inteligencia Artificial. Transformamos tus proyectos con agentes de IA avanzados, chatbots inteligentes y herramientas de web scraping impulsadas por IA.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20"
        >
          {/* Servicio 1 */}
          <motion.div
            variants={fadeIn}
            className="bg-purple-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-purple-600 mb-4 text-4xl">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Integración de Agentes de IA</h3>
            <p className="text-gray-800 mb-6 font-medium">
              Incorporamos agentes inteligentes en tus sistemas para automatizar procesos, mejorar la eficiencia y optimizar la toma de decisiones. Desde asistentes virtuales hasta modelos de IA personalizados, diseñamos soluciones a la medida de tu negocio.
            </p>
            <Button href="/servicios/integracion-ia" variant="outline">Más información</Button>
          </motion.div>

          {/* Servicio 2 */}
          <motion.div
            variants={fadeIn}
            className="bg-blue-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-blue-600 mb-4 text-4xl">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Desarrollo de proyectos con IA desde cero</h3>
            <p className="text-gray-800 mb-6 font-medium">
              Si tienes una idea innovadora, te ayudamos a convertirla en un producto funcional basado en IA. Desde la concepción hasta el desarrollo y despliegue, construimos soluciones que marcan la diferencia.
            </p>
            <Button href="/servicios/desarrollo-ia" variant="outline">Más información</Button>
          </motion.div>

          {/* Servicio 3 */}
          <motion.div
            variants={fadeIn}
            className="bg-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-green-600 mb-4 text-4xl">💬</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Chatbots y asistentes de IA</h3>
            <p className="text-gray-800 mb-6 font-medium">
              Mejora la experiencia de tus usuarios con chats impulsados por IA. Integramos chatbots en tu web o plataforma para responder consultas, automatizar tareas y brindar soporte en tiempo real.
            </p>
            <Button href="/servicios/chatbots-ia" variant="outline">Más información</Button>
          </motion.div>

          {/* Servicio 4 */}
          <motion.div
            variants={fadeIn}
            className="bg-amber-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-amber-600 mb-4 text-4xl">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Scraping con IA</h3>
            <p className="text-gray-800 mb-6 font-medium">
              Captura, procesa y adapta contenido de manera inteligente con nuestras soluciones de web scraping basadas en IA. Automatiza la recopilación de información relevante y optimiza la gestión de contenido en tu sitio web.
            </p>
            <Button href="/servicios/web-scraping-ia" variant="outline">Más información</Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-300 p-8 rounded-xl mt-20 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="text-green-700 mr-2 mt-1 text-xl">✅</div>
              <p className="text-gray-900 font-semibold">Especialización en Inteligencia Artificial aplicada a negocios.</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-700 mr-2 mt-1 text-xl">✅</div>
              <p className="text-gray-900 font-semibold">Desarrollo a medida para cada cliente.</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-700 mr-2 mt-1 text-xl">✅</div>
              <p className="text-gray-900 font-semibold">Enfoque en la innovación y optimización de procesos.</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-700 mr-2 mt-1 text-xl">✅</div>
              <p className="text-gray-900 font-semibold">Compromiso con la calidad y escalabilidad de nuestros proyectos.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
} 