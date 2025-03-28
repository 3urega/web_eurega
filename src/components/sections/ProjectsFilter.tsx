"use client";

import { useState } from 'react';
import Button from '../ui/Button';

interface ProjectsFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeCategory: string;
}

export default function ProjectsFilter({
  categories,
  onFilterChange,
  activeCategory = '',
}: ProjectsFilterProps) {
  
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={activeCategory === '' ? 'primary' : 'outline'}
        onClick={() => onFilterChange('')}
        className="text-sm"
      >
        Todos
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'primary' : 'outline'}
          onClick={() => onFilterChange(category)}
          className="text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  );
} 