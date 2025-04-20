export default {
  async send(ctx) {
    try {
      const { name, email, message, service } = ctx.request.body;

      // Validación básica
      if (!name || !email || !message) {
        return ctx.badRequest('Faltan campos requeridos: name, email, message');
      }

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return ctx.badRequest('El formato del email no es válido');
      }

      console.log('Intentando enviar email con configuración:', {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_FROM,
        replyTo: email
      });

      // Enviar email usando el servicio de Strapi
      try {
        await strapi.plugins['email'].services.email.send({
          to: process.env.SMTP_FROM,
          from: process.env.SMTP_FROM,
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
      } catch (emailError) {
        console.error('Error detallado al enviar email:', emailError);
        return ctx.badRequest(`Error al enviar el email: ${emailError.message}`);
      }

      // Enviar email de confirmación al usuario
      try {
        await strapi.plugins['email'].services.email.send({
          to: email,
          from: process.env.SMTP_FROM,
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
      } catch (confirmationError) {
        console.error('Error detallado al enviar email de confirmación:', confirmationError);
        // No retornamos error aquí porque el email principal ya se envió
      }

      return { success: true, message: 'Email enviado correctamente' };
    } catch (error) {
      console.error('Error general:', error);
      return ctx.badRequest(`Error al procesar la solicitud: ${error.message}`);
    }
  },
}; 