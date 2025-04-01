"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  title = 'Soluciones digitales a medida',
  subtitle = 'Desarrollo web y aplicaciones que transforman ideas en productos digitales exitosos, con enfoque en resultados medibles para tu negocio.',
  ctaText = 'Ver proyectos',
  ctaLink = '/proyectos',
  secondaryCtaText = 'Contactar',
  secondaryCtaLink = '/contacto',
}: HeroProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-400 to-teal-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-32">
        <motion.div
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span className="rounded-full bg-purple-600/10 px-3 py-1 text-sm font-semibold leading-6 text-purple-600 ring-1 ring-inset ring-purple-600/10">
                  eurega
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Soluciones tecnológicas</span>
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            {title}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-x-6"
          >
            <Button href={ctaLink} variant="primary" size="lg">
              {ctaText}
            </Button>
            <Button href={secondaryCtaLink} variant="outline" size="lg">
              {secondaryCtaText}
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {/* Simulador de chat de IA */}
              <div className="w-[45rem] h-[25rem] rounded-md bg-white shadow-md overflow-hidden flex flex-col">
                {/* Encabezado del chat */}
                <div className="bg-gray-800 text-white p-4 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="ml-2 font-medium">Chat con IA</span>
                </div>
                
                {/* Cuerpo del chat */}
                <div className="flex-grow p-6 overflow-y-auto bg-gray-50">
                  {/* Mensaje del usuario */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-purple-600 text-white rounded-lg py-2 px-4 max-w-md">
                      <p>¿Cómo puedo crear mi app de IA?</p>
                    </div>
                  </div>
                  
                  {/* Indicador de escritura */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold mr-2">
                      AI
                    </div>
                    <motion.div 
                      className="flex space-x-1"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </motion.div>
                  </div>
                  
                  {/* Respuesta de la IA */}
                  <div className="flex mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold mr-2">
                      AI
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg py-2 px-4 max-w-md shadow-sm">
                      <p className="text-gray-800">Para crear tu propia aplicación de IA, te recomiendo contactar con expertos en el desarrollo de este tipo de soluciones. <span className="font-bold text-purple-700">Escríbele a eurega</span>, ellos se especializan en la implementación de soluciones con inteligencia artificial a medida.</p>
                    </div>
                  </div>
                </div>
                
                {/* Input del chat */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Escribe un mensaje..."
                      className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      disabled
                    />
                    <button className="bg-purple-600 text-white p-2 rounded-r-md hover:bg-purple-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
} 