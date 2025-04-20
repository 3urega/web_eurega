export default {
  async send(ctx) {
    try {
      console.log('=== INICIO DE PETICIÓN DE CONTACTO ===');
      console.log('Body recibido:', ctx.request.body);
      console.log('Headers:', ctx.request.headers);
      console.log('URL:', ctx.request.url);
      
      const { name, email, message, service } = ctx.request.body;

      // Validación básica
      if (!name || !email || !message) {
        console.log('Error: Faltan campos requeridos');
        return ctx.badRequest('Faltan campos requeridos: name, email, message');
      }

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log('Error: Formato de email inválido:', email);
        return ctx.badRequest('El formato del email no es válido');
      }

      console.log('=== CONFIGURACIÓN DE EMAIL ===');
      console.log('Host:', process.env.SMTP_HOST);
      console.log('Port:', process.env.SMTP_PORT);
      console.log('From:', process.env.SMTP_FROM);
      console.log('Username:', process.env.SMTP_USERNAME);
      console.log('Reply To:', email);

      // Enviar email usando el servicio de Strapi
      try {
        console.log('=== INTENTANDO ENVIAR EMAIL PRINCIPAL ===');
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
        console.log('Email principal enviado correctamente');
      } catch (emailError) {
        console.error('=== ERROR AL ENVIAR EMAIL PRINCIPAL ===');
        console.error('Error completo:', emailError);
        console.error('Stack trace:', emailError.stack);
        return ctx.badRequest(`Error al enviar el email: ${emailError.message}`);
      }

      // Enviar email de confirmación al usuario
      try {
        console.log('=== INTENTANDO ENVIAR EMAIL DE CONFIRMACIÓN ===');
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
        console.log('Email de confirmación enviado correctamente');
      } catch (confirmationError) {
        console.error('=== ERROR AL ENVIAR EMAIL DE CONFIRMACIÓN ===');
        console.error('Error completo:', confirmationError);
        console.error('Stack trace:', confirmationError.stack);
        // No retornamos error aquí porque el email principal ya se envió
      }

      console.log('=== FIN DE PETICIÓN DE CONTACTO ===');
      return { success: true, message: 'Email enviado correctamente' };
    } catch (error) {
      console.error('=== ERROR GENERAL EN EL CONTROLADOR ===');
      console.error('Error completo:', error);
      console.error('Stack trace:', error.stack);
      return ctx.badRequest(`Error al procesar la solicitud: ${error.message}`);
    }
  },
}; 