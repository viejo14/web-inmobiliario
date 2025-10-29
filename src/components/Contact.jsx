import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold text-white mb-4">Contacto</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
        <div>
          <p className="mb-1"><strong>Nombre:</strong> Gonzalo Rojas Castro</p>
          <p className="mb-1"><strong>Compañía:</strong> BDR Gestión Inmobiliaria SpA</p>
          <p className="mb-1"><strong>Teléfono:</strong> <a href="tel:+56988985592" className="hover:underline">+56 9 8898 5592</a></p>
          <p className="mb-1"><strong>Email:</strong> <a href="mailto:gonzalo.rojas@bienderaiz.cl" className="hover:underline">gonzalo.rojas@bienderaiz.cl</a></p>
        </div>
        <div>
          <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Formulario de ejemplo: enviar datos')}}>
            <label className="sr-only">Nombre</label>
            <input aria-label="Nombre" required type="text" className="w-full px-3 py-2 bg-white/5 rounded-md text-white" placeholder="Tu nombre" />

            <label className="sr-only">Email</label>
            <input aria-label="Email" required type="email" className="w-full px-3 py-2 bg-white/5 rounded-md text-white" placeholder="Tu email" />

            <label className="sr-only">Mensaje</label>
            <textarea aria-label="Mensaje" required className="w-full px-3 py-2 bg-white/5 rounded-md text-white" rows="4" placeholder="Mensaje"></textarea>

            <div className="flex justify-start">
              <button className="bg-primary px-4 py-2 rounded-md text-white w-full md:w-auto">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
