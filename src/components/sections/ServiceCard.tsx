import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
  features?: string[];
  showDetails?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  features = [],
  showDetails = true,
}: ServiceCardProps) {
  return (
    <Card 
      className="flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
      variant="elevated"
    >
      <div className="mb-5">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-purple-100 text-purple-600 mb-4">
            {/* Placeholder para el icono - en producción se usaría un componente de icono adecuado */}
            <div dangerouslySetInnerHTML={{ __html: icon }} />
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {showDetails && features.length > 0 && (
        <div className="mt-4 mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Características:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-purple-600">
                  {/* Placeholder para checkmark - en producción se usaría un componente de icono */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </span>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-4">
        <Button href={link} variant="outline" size="sm">
          Ver detalles
        </Button>
      </div>
    </Card>
  );
} 