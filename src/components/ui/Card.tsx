"use client"

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: string;
  radius?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  variant = 'elevated',
  padding = 'p-6',
  radius = 'rounded-lg',
  onClick,
}: CardProps) {
  // Estilos base según la variante
  const variantClasses = {
    elevated: 'bg-white shadow-md hover:shadow-lg transition-shadow duration-200',
    outlined: 'bg-white border border-gray-200',
    filled: 'bg-gray-50',
  };

  // Si hay onClick, necesitamos cursor pointer
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${variantClasses[variant]} ${radius} ${padding} ${interactiveClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
} 