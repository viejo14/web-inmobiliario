import React from 'react';

const services = [
  {
    title: 'Intermediación y asesoría inmobiliaria',
    img: '/src/assets/img/Intermediación-asesoría-inmobiliaria.jpg',
    desc: 'Acompañamos y asesoramos en todo el proceso inmobiliario.'
  },
  {
    title: 'Compra, venta, arriendo y permuta',
    img: '/src/assets/img/Compra-venta,-arriendo-permuta.jpg',
    desc: 'Gestión integral en operaciones de compra, venta, arriendo y permuta de propiedades.'
  },
  {
    title: 'Tasaciones profesionales',
    img: '/src/assets/img/Tasaciones-profesionales.jpg',
    desc: 'Realizamos tasaciones precisas y confiables para tu propiedad.'
  },
  {
    title: 'Asesoría a inversionistas',
    img: '/src/assets/img/Asesoría-inversionistas.jpg',
    desc: 'Orientación en inversiones tanto en el mercado primario (nuevas) como secundario (usadas).'
  },
  {
    title: 'Brókers asociados',
    img: '/src/assets/img/Brókers-asociados.jpg',
    desc: 'Trabajamos directamente como brókers asociados a las principales inmobiliarias.'
  },
];

function Servicios() {
  return (
    <main className="min-h-screen bg-white/90">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Nuestros <span className="text-primary">Servicios</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {services.slice(0, 3).map((service, idx) => (
              <div key={idx} className="bg-primary/10 rounded-full shadow-lg flex flex-col items-center justify-center w-80 h-80 p-10">
              <img src={service.img} alt={service.title} className="w-24 h-24 object-contain mb-4 rounded-full" />
              <div className="text-primary font-semibold text-center text-lg mb-2">{service.title}</div>
              <div className="text-secondary text-center text-base">{service.desc}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mt-10">
          {services.slice(3).map((service, idx) => (
            <div key={idx} className="bg-primary/10 rounded-full shadow-lg flex flex-col items-center justify-center w-72 h-72 p-8">
              <img src={service.img} alt={service.title} className="w-24 h-24 object-contain mb-4 rounded-full" />
              <div className="text-primary font-semibold text-center text-lg mb-2">{service.title}</div>
              <div className="text-secondary text-center text-base">{service.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Servicios;
