import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const adminToEmail =
    import.meta.env.VITE_EMAILJS_ADMIN_TO_EMAIL;

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
    <div className="bg-white/90 relative w-full min-h-screen pt-24 pb-12">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#981d97] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#981d97] opacity-5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <section id="contact" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contenido principal */}
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">Contacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-secondary">
          <div className="space-y-4">
            <p className="text-sm md:text-base">
              <strong>Contacto:</strong> Bien de Raíz Propiedades
            </p>
            <p className="text-sm md:text-base">
              <strong>Empresa:</strong> BDR Gestión Inmobiliaria SpA
            </p>
            <p className="text-sm md:text-base">
              <strong>Teléfonos:</strong>
              <a href="tel:+56232687386" className="hover:underline ml-1">+56 2 3268 7386</a>
              <span className="mx-1">/</span>
              <a href="tel:+56988985592" className="hover:underline">+56 9 8898 5592</a>
            </p>
            <p className="text-sm md:text-base">
              <strong>Correo:</strong>
              <a href="mailto:contacto@bienderaiz.cl" className="hover:underline ml-1 break-all">contacto@bienderaiz.cl</a>
            </p>
          </div>
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="sr-only" htmlFor="contact-name">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  name="name"
                  aria-label="Nombre"
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-secondary/20 rounded-md text-secondary text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  aria-label="Email"
                  required
                  type="email"
                  className="w-full px-4 py-3 bg-secondary/20 rounded-md text-secondary text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-message">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  aria-label="Mensaje"
                  required
                  className="w-full px-4 py-3 bg-secondary/20 rounded-md text-secondary text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  rows="5"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSending}
                ></textarea>
              </div>

              {status.message && (
                <p className={`text-sm md:text-base ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-primary px-6 py-3 rounded-md text-white w-full md:w-auto disabled:bg-primary/60 font-semibold hover:bg-primary/90 transition-colors text-sm md:text-base"
                  disabled={isSending}
                >
                  {isSending ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
