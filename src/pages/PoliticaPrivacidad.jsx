import React from 'react';

function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-white/90 pt-24">
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">Política de Privacidad</h1>
        <div className="bg-primary/10 rounded-xl p-6 text-gray-800 text-sm">
          <p className="mb-4">Tu privacidad es importante para nosotros. En Bien de Raíz, nos comprometemos a proteger tus datos personales y a usarlos únicamente para los fines necesarios.</p>
          <h2 className="text-lg font-bold text-primary mb-2">¿Qué datos recopilamos?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
            <li>Datos de navegación y uso del sitio</li>
            <li>Información sobre propiedades y preferencias</li>
          </ul>
          <h2 className="text-lg font-bold text-primary mb-2">¿Cómo usamos tus datos?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Para responder consultas y solicitudes</li>
            <li>Para mejorar nuestros servicios y experiencia de usuario</li>
            <li>Para enviar información relevante sobre propiedades y servicios</li>
          </ul>
          <h2 className="text-lg font-bold text-primary mb-2">Tus derechos</h2>
          <p className="mb-4">Puedes solicitar la modificación o eliminación de tus datos en cualquier momento. Para ello, contáctanos a <a href="mailto:contacto@bienderaiz.cl" className="underline text-primary">contacto@bienderaiz.cl</a>.</p>
          <p>Para más información, revisa nuestros términos y condiciones o contáctanos directamente.</p>
        </div>
      </section>
    </main>
  );
}

export default PoliticaPrivacidad;
