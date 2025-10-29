import React from 'react'
import imgHome from '../assets/img/img-home.jpg';

export default function Hero(){
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <img src={imgHome} alt="Casa" className="absolute inset-0 w-full h-full object-cover" style={{zIndex:0}} />
      <div className="absolute inset-0 bg-black/40" style={{zIndex:1}}></div>
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="max-w-2xl mr-auto ml-8 px-4 py-12 md:py-20 text-left bg-white/10 backdrop-blur-md rounded-xl border border-white/30">
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4">Encuentra la casa de tus sueños</h2>
          <div className="mb-6">
            <p className="text-white/80 text-base mb-4">Gestión e intermediación inmobiliaria enfocada en las personas. Asesoría integral en compra, venta y arriendo de propiedades.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#about" className="bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg text-center">Nosotros</a>
            <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg text-center">Contacto</a>
          </div>
        </div>
      </div>
    </section>
  )
}
