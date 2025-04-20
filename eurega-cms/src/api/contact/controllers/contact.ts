export default {
  async send(ctx) {
    try {
      const { name, email, message, service } = ctx.request.body;

      // Enviar email usando el servicio de Strapi
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

      // Enviar email de confirmación al usuario
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

      return { success: true, message: 'Email enviado correctamente' };
    } catch (error) {
      console.error('Error al enviar email:', error);
      return ctx.badRequest('Error al enviar el email');
    }
  },
}; 