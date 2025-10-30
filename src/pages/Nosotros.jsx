import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-white/90">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Sobre <span className="text-primary">Nosotros</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/src/assets/img/img_nosotros.png" alt="Equipo inmobiliario" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-bold text-primary mb-2">Nuestra filosofía</h3>
            <p className="text-secondary mb-4">No vendemos ni arrendamos propiedades, porque no son nuestras. Lo que hacemos es representar a clientes que confían en nuestra experticia, en nuestro juicio, en nuestro despliegue técnico y en las afinadas herramientas que hemos podido fraguar con paciencia y dedicación. A ellos y a sus objetivos nos debemos. El nuestro es simple: merecer clientes de por vida.</p>
            <h3 className="text-lg font-bold text-primary mb-2">Servicios</h3>
            <p className="text-secondary mb-2">Intermediación y asesoría en todo el ámbito inmobiliario: compra, venta, arriendo, permuta, tasaciones, asesoría a inversionistas tanto en el mercado primario (propiedades nuevas) como en el secundario (usadas).</p>
            <p className="text-secondary">Trabajamos directamente como brókers asociados a las principales inmobiliarias del país.</p>
          </div>
        </div>
      </section>
      {/* Misión, Visión y Valores */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Misión</h3>
            <p className="text-secondary">Brindar asesoría inmobiliaria integral, priorizando la confianza y el bienestar de nuestros clientes en cada etapa del proceso.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Visión</h3>
            <p className="text-secondary">Ser reconocidos como la empresa inmobiliaria más confiable y humana, mereciendo clientes de por vida.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Valores</h3>
            <ul className="list-disc pl-5 text-secondary">
              <li>Transparencia</li>
              <li>Compromiso</li>
              <li>Empatía</li>
              <li>Profesionalismo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonio */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h3 className="text-lg font-bold text-primary mb-4 text-center">Testimonio</h3>
        <div className="bg-white rounded-xl shadow-md p-6 text-secondary text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 w-6 h-6 mx-0.5" />
            ))}
          </div>
          <p className="italic mb-2">“La atención personalizada y el profesionalismo de BDR Gestión Inmobiliaria hicieron que todo el proceso fuera transparente y seguro. ¡Recomendados!”</p>
          <span className="font-bold text-primary">— María González</span>
        </div>
      </section>
    </main>
  );
}
