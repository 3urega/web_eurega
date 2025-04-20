"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendContactForm } from '@/services/strapi';
import FormField from '../forms/FormField';
import Button from '../ui/Button';

// Schema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es demasiado corto').max(50),
  email: z.string().email('Introduce un email válido'),
  service: z.string().optional(),
  message: z.string().min(10, 'El mensaje es demasiado corto').max(500),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar los términos',
  }),
});

type FormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  services?: {id: string; name: string}[];
  layout?: 'standard' | 'compact' | 'full';
  onSuccess?: () => void;
}

// IDs estáticos para los campos del formulario
const FIELD_IDS = {
  name: 'contact-name',
  email: 'contact-email',
  service: 'contact-service',
  message: 'contact-message',
  acceptTerms: 'contact-terms',
};

export default function ContactForm({ 
  services = [], 
  layout = 'standard',
  onSuccess 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: '',
      acceptTerms: false,
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus('idle');
    
    try {
      const response = await sendContactForm(data);
      setFormStatus('success');
      reset();
      onSuccess?.();
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setFormStatus('error');
      setErrorMessage('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-2">¡Mensaje enviado!</h3>
        <p className="text-green-600">
          Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
        </p>
        <button
          onClick={() => setFormStatus('idle')}
          className="mt-4 text-sm text-green-700 hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className={`form-container form-${layout}`}>
      {formStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-700">Error</h3>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      )}
      
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6"
        aria-label="Formulario de contacto"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Nombre"
            error={errors.name?.message}
            required
            id={FIELD_IDS.name}
          >
            <input
              id={FIELD_IDS.name}
              type="text"
              {...register('name')}
              className="w-full p-3 border rounded-lg"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
          </FormField>
          
          <FormField
            label="Email"
            error={errors.email?.message}
            required
            id={FIELD_IDS.email}
          >
            <input
              id={FIELD_IDS.email}
              type="email"
              {...register('email')}
              className="w-full p-3 border rounded-lg"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </FormField>
        </div>
        
        {services.length > 0 && (
          <FormField
            label="Servicio de interés"
            error={errors.service?.message}
            id={FIELD_IDS.service}
          >
            <select
              id={FIELD_IDS.service}
              {...register('service')}
              className="w-full p-3 border rounded-lg"
              aria-invalid={errors.service ? 'true' : 'false'}
            >
              <option value="">Selecciona un servicio</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </FormField>
        )}
        
        <FormField
          label="Mensaje"
          error={errors.message?.message}
          required
          id={FIELD_IDS.message}
        >
          <textarea
            id={FIELD_IDS.message}
            {...register('message')}
            rows={5}
            className="w-full p-3 border rounded-lg"
            aria-invalid={errors.message ? 'true' : 'false'}
          />
        </FormField>
        
        <FormField
          error={errors.acceptTerms?.message}
          id={FIELD_IDS.acceptTerms}
        >
          <div className="flex items-start">
            <input
              id={FIELD_IDS.acceptTerms}
              type="checkbox"
              {...register('acceptTerms')}
              className="mt-1 mr-2"
              aria-invalid={errors.acceptTerms ? 'true' : 'false'}
            />
            <label htmlFor={FIELD_IDS.acceptTerms} className="text-sm text-gray-600">
              Acepto la política de privacidad y el tratamiento de mis datos
            </label>
          </div>
        </FormField>
        
        <div className="mt-8">
          <Button
            type="submit"
            variant="primary"
            className={layout !== 'standard' ? 'w-full' : ''}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </div>
      </form>
    </div>
  );
} 