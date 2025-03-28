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
}: SectionProps) {
  // Map spacing to padding class
  const spacingClass = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
  };

  const content = withContainer ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={`${background} ${spacingClass[spacing]} ${className}`}
    >
      {content}
    </section>
  );
} 