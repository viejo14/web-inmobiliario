import React from 'react';
import { FiUsers, FiHome, FiRepeat, FiBarChart2, FiTrendingUp, FiStar } from 'react-icons/fi';

const services = [
  {
    title: 'Intermediación Integral',
    description: 'Representamos sus intereses en todo el proceso inmobiliario, asegurando las mejores condiciones y transparencia absoluta.',
    icon: <FiUsers />
  },
  {
    title: 'Compra y Venta',
    description: 'Asesoría especializada tanto en mercado primario (propiedades nuevas) como secundario (usadas).',
    icon: <FiHome />
  },
  {
    title: 'Arriendo y Permuta',
    description: 'Encontramos la mejor alternativa para sus necesidades de vivienda o inversión.',
    icon: <FiRepeat />
  },
  {
    title: 'Tasaciones Profesionales',
    description: 'Valuaciones precisas y actualizadas del mercado para tomar decisiones informadas.',
    icon: <FiBarChart2 />
  },
  {
    title: 'Asesoría a Inversionistas',
    description: 'Análisis de oportunidades y estrategias personalizadas para maximizar su rentabilidad.',
    icon: <FiTrendingUp />
  },
  {
    title: 'Brokers Asociados',
    description: 'Trabajamos con las principales inmobiliarias para ampliar sus oportunidades en el mercado.',
    icon: <FiStar />
  }
]

function Services(){
  return (
    <section id="services" className="relative bg-[#2e092d] py-20 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#981d97] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#981d97] bg-opacity-20 text-white rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Expertise Inmobiliario Integral
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones completas en gestión e intermediación inmobiliaria, 
            siempre con el foco en sus objetivos personales y de inversión.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#981d97] transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 text-[#981d97]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
              
              {/* Línea decorativa */}
              <div className="w-12 h-1 bg-[#981d97] mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Nota destacada */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Un enfoque diferente
              </h3>
              <p className="text-white/70">
                No somos un canal de ventas tradicional. Representamos exclusivamente sus intereses, 
                con herramientas afinadas y despliegue técnico para lograr sus objetivos inmobiliarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;