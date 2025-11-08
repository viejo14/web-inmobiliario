import React from 'react';

function About() {
  return (
    <section id="about" className="relative bg-white/90 py-20 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#981d97] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#2e092d] opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de texto */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-[#981d97] bg-opacity-10 text-white rounded-full text-sm font-medium">
                Nuestra Filosofía
              </span>
              <h2 className="text-4xl font-bold text-[#2e092d]">
                Más que intermediarios, somos sus aliados
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                En <strong className="text-[#981d97]">Bien de Raíz</strong> redefinimos el concepto de intermediación poniendo a las personas en el centro de cada decisión.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#981d97] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-[#2e092d]">No vendemos propiedades</strong> – representamos 
                    sus objetivos y defendemos sus intereses como si fueran los nuestros.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#981d97] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-[#2e092d]">Expertise especializada</strong> – combinamos 
                    juicio experto con herramientas tecnológicas afinadas para una gestión eficaz.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#981d97] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-[#2e092d]">Compromiso a largo plazo</strong> – nuestro 
                    objetivo es simple: merecer clientes de por vida.
                  </p>
                </div>
              </div>
            </div>

            {/* Estadísticas o datos destacados */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#981d97]">+5</div>
                <div className="text-sm text-gray-500">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#981d97]">100%</div>
                <div className="text-sm text-gray-500">Enfocados en Personas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#981d97]">∞</div>
                <div className="text-sm text-gray-500">Compromiso Duradero</div>
              </div>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden h-96 lg:h-[500px] bg-gray-200">
              {/* Imagen desde URL con overlay degradado (mantiene legibilidad) */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('img/img-header/Diseno-carpeta.png')` }} />
              <div className="absolute inset-0 bg-gradient-to-br from-[#981d97] to-[#2e092d] opacity-20 flex items-center justify-center">
                <span className="text-[#2e092d] text-lg font-medium">Equipo BDR / Imagen representativa</span>
              </div>
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#981d97] rounded-2xl opacity-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#981d97] rounded-2xl opacity-10"></div>
          </div>

        </div>

        {/* Cita o frase destacada */}
        <div className="mt-16 text-center">
          <blockquote className="max-w-3xl mx-auto text-xl italic text-gray-700">
            "No medimos nuestro éxito por transacciones cerradas, sino por relaciones construidas y objetivos cumplidos."
          </blockquote>
          <p className="mt-4 text-[#981d97] font-medium">Bien de Raíz</p>
        </div>
      </div>
    </section>
  );
}

export default About;