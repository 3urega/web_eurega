"use client"

import React, { ReactNode, ReactElement, isValidElement } from 'react';

interface FormFieldProps {
  children: ReactNode;
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  id?: string;
}

export default function FormField({
  children,
  label,
  error,
  required = false,
  className = '',
  id: externalId,
}: FormFieldProps) {
  return (
    <div className={`form-field ${className}`}>
      {label && (
        <label 
          htmlFor={externalId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {children}
      
      {error && (
        <p className="mt-1 text-sm text-red-600" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
} 