import React from 'react'

const services = [
  'Intermediación y asesoría en todo el ámbito inmobiliario',
  'Compra, venta, arriendo, permuta, tasaciones',
  'Asesoría a inversionistas en mercado primario y secundario',
  'Brókers asociados a las principales inmobiliarias'
]

export default function Services(){
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold text-white mb-4">Servicios</h3>
      <ul className="list-disc list-inside text-white/90 space-y-2">
        {services.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
