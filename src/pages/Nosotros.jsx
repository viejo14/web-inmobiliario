import React from 'react';

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-white/90">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Sobre <span className="text-primary">Nosotros</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Imagen: reemplaza src por tu imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/src/assets/img/img_nosotros.png" alt="Equipo inmobiliario" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold text-primary mb-4">Somos BDR Gestión Inmobiliaria SpA</h2>
            <p className="text-secondary mb-4">Somos una empresa de gestión e intermediación inmobiliaria con enfoque prioritario en las personas. Representamos a clientes que confían en nuestra experticia y herramientas desarrolladas con dedicación. Nuestro objetivo es simple: merecer clientes de por vida.</p>
            <p className="text-secondary">Brindamos asesoría integral en compra, venta, arriendo y tasaciones, trabajando como brókers asociados a las principales inmobiliarias del país.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
