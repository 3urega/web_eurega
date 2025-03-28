import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: string;
}

export default function Container({
  children,
  className = '',
  size = 'lg',
  padding = 'px-4 sm:px-6 lg:px-8',
}: ContainerProps) {
  // Map size to max-width class
  const maxWidthClass = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto ${maxWidthClass[size]} ${padding} ${className}`}>
      {children}
    </div>
  );
} 