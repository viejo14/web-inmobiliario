import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const adminToEmail =
    import.meta.env.VITE_EMAILJS_ADMIN_TO_EMAIL || 'fcampospino754@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!serviceId || !adminTemplateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Configuracion de EmailJS incompleta. Verifica las variables de entorno.',
      });
      return;
    }

    setIsSending(true);

    try {
      const adminPayload = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: adminToEmail,
      };

      await emailjs.send(serviceId, adminTemplateId, adminPayload, { publicKey });

      setStatus({
        type: 'success',
        message: 'Gracias por contactarnos. Te responderemos pronto.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'No pudimos enviar tu mensaje. Intenta nuevamente en unos minutos.',
      });
      console.error('EmailJS contact error', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold text-white mb-4">Contacto</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
        <div>
          <p className="mb-1">
            <strong>Nombre:</strong> Gonzalo Rojas Castro
          </p>
          <p className="mb-1">
            <strong>Compania:</strong> BDR Gestion Inmobiliaria SpA
          </p>
          <p className="mb-1">
            <strong>Telefono:</strong>{' '}
            <a href="tel:+56988985592" className="hover:underline">
              +56 9 8898 5592
            </a>
          </p>
          <p className="mb-1">
            <strong>Email:</strong>{' '}
            <a href="mailto:gonzalo.rojas@bienderaiz.cl" className="hover:underline">
              gonzalo.rojas@bienderaiz.cl
            </a>
          </p>
        </div>
        <div>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="contact-name">
              Nombre
            </label>
            <input
              id="contact-name"
              name="name"
              aria-label="Nombre"
              required
              type="text"
              className="w-full px-3 py-2 bg-white/5 rounded-md text-white"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              disabled={isSending}
            />

            <label className="sr-only" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              aria-label="Email"
              required
              type="email"
              className="w-full px-3 py-2 bg-white/5 rounded-md text-white"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSending}
            />

            <label className="sr-only" htmlFor="contact-message">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              name="message"
              aria-label="Mensaje"
              required
              className="w-full px-3 py-2 bg-white/5 rounded-md text-white"
              rows="4"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              disabled={isSending}
            ></textarea>

            {status.message && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-md text-white w-full md:w-auto disabled:bg-primary/60"
                disabled={isSending}
              >
                {isSending ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
