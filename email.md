# Configuración de Formulario de Contacto con Brevo SMTP en Next.js

## Requisitos Previos

1. Tener un proyecto Next.js configurado
2. Tener una cuenta en Brevo (anteriormente Sendinblue)
3. Tener las credenciales SMTP de Brevo

## Credenciales SMTP de Brevo

```
Host: smtp-relay.brevo.com
Puerto: 587
Usuario: 8af315001@smtp-brevo.com
Contraseña: On79JvF3RGKS8qP4
Email de envío: no-reply@eurega.es
Email de respuesta: info@eurega.es
```

## Pasos para la Implementación

### 1. Instalar Dependencias

```bash
npm install nodemailer
```

### 2. Crear API Route en Next.js

Crear el archivo `pages/api/contact.ts`:

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, message, service } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  // Configurar el transportador de email
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: '8af315001@smtp-brevo.com',
      pass: 'On79JvF3RGKS8qP4',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Enviar email al administrador
    await transporter.sendMail({
      from: 'no-reply@eurega.es',
      to: 'info@eurega.es',
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Servicio: ${service || 'No especificado'}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    // Enviar email de confirmación al usuario
    await transporter.sendMail({
      from: 'no-reply@eurega.es',
      to: email,
      subject: 'Gracias por contactar con Eurega',
      text: `
        Hola ${name},
        
        Gracias por contactar con Eurega. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
        
        Saludos,
        El equipo de Eurega
      `,
      html: `
        <h2>Gracias por contactar con Eurega</h2>
        <p>Hola ${name},</p>
        <p>Gracias por contactar con Eurega. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
        <p>Saludos,<br>El equipo de Eurega</p>
      `,
    });

    return res.status(200).json({ message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return res.status(500).json({ message: 'Error al enviar el email' });
  }
}
```

### 3. Crear el Componente del Formulario

Crear el archivo `components/ContactForm.tsx`:

```typescript
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el formulario');
      }

      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Nombre *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="service" className="block mb-2">Servicio</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Selecciona un servicio</option>
          <option value="web">Desarrollo Web</option>
          <option value="mobile">Desarrollo Móvil</option>
          <option value="consulting">Consultoría</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Mensaje *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-green-600">¡Mensaje enviado correctamente!</p>
      )}

      {status === 'error' && (
        <p className="mt-4 text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
```

### 4. Usar el Formulario en una Página

```typescript
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>
      <ContactForm />
    </div>
  );
}
```

## Consideraciones de Seguridad

1. **Variables de Entorno**: En producción, mover las credenciales SMTP a variables de entorno:
   ```env
   SMTP_HOST=smtp-relay.brevo.com
   SMTP_PORT=587
   SMTP_USER=8af315001@smtp-brevo.com
   SMTP_PASS=On79JvF3RGKS8qP4
   SMTP_FROM=no-reply@eurega.es
   SMTP_REPLY_TO=info@eurega.es
   ```

2. **Rate Limiting**: Implementar límites de tasa para prevenir spam:
   ```bash
   npm install express-rate-limit
   ```

3. **Validación**: Agregar validación más robusta de los datos del formulario:
   ```bash
   npm install zod
   ```

## Pruebas

1. Enviar un formulario con todos los campos requeridos
2. Verificar que se reciben los emails (tanto el de notificación como el de confirmación)
3. Probar casos de error (campos faltantes, email inválido)
4. Verificar el límite de tasa en producción

## Mantenimiento

1. Monitorear los logs de errores
2. Verificar regularmente las estadísticas de envío en el panel de Brevo
3. Actualizar las dependencias regularmente
4. Mantener actualizadas las credenciales SMTP 