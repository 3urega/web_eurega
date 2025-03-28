import React from 'react';
import Container from './Container';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
  backgroundImage?: string;
  alignment?: 'left' | 'center';
}

export default function PageHeader({
  title,
  description,
  breadcrumb,
  backgroundImage,
  alignment = 'center',
}: PageHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
  };

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  const textColorClass = backgroundImage ? 'text-white' : 'text-gray-900';
  const descriptionColorClass = backgroundImage ? 'text-gray-200' : 'text-gray-600';

  return (
    <div 
      className={`py-12 sm:py-16 ${backgroundImage ? 'bg-gray-900' : 'bg-gradient-to-b from-purple-50 to-white'}`}
      style={backgroundStyle}
    >
      <Container>
        <div className={alignmentClasses[alignment]}>
          {breadcrumb && (
            <nav className="mb-4">
              <ol className={`flex ${alignment === 'center' ? 'justify-center' : 'justify-start'} space-x-2 text-sm`}>
                {breadcrumb.map((item, index) => (
                  <li key={item.href} className="flex items-center">
                    {index > 0 && (
                      <span className={`mx-2 ${backgroundImage ? 'text-gray-400' : 'text-gray-500'}`}>/</span>
                    )}
                    <Link 
                      href={item.href} 
                      className={`hover:underline ${backgroundImage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1 
            className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${textColorClass}`}
          >
            {title}
          </h1>

          {description && (
            <p 
              className={`mt-4 max-w-2xl text-lg ${descriptionColorClass} ${alignment === 'center' ? 'mx-auto' : ''}`}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
} 