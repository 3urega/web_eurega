import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: string;
  spacing?: 'sm' | 'md' | 'lg';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  containerClassName?: string;
  withContainer?: boolean;
  title?: string;
  subtitle?: string;
}

export default function Section({
  children,
  className = '',
  id,
  background = 'bg-white',
  spacing = 'md',
  containerSize = 'lg',
  containerClassName = '',
  withContainer = true,
  title,
  subtitle,
}: SectionProps) {
  // Map spacing to padding class
  const spacingClass = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
  };

  const content = (
    <>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>}
          {subtitle && <p className="text-xl text-gray-800 font-medium">{subtitle}</p>}
        </div>
      )}
      {children}
    </>
  );

  const wrappedContent = withContainer ? (
    <Container size={containerSize} className={containerClassName}>
      {content}
    </Container>
  ) : (
    content
  );

  return (
    <section
      id={id}
      className={`${background} ${spacingClass[spacing]} ${className}`}
    >
      {wrappedContent}
    </section>
  );
} 