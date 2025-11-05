import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Footer(){
  return (
    <footer className="w-full bg-secondary text-white relative overflow-hidden">
      {/* Imagen de fondo con opacidad */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{ backgroundImage: 'url(/src/assets/img/icon.png)' }}
      ></div>

      {/* Elemento decorativo moderno */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#981d97] to-[#2e092d]"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        
        {/* Grid principal moderno */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

          {/* Brand Section */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="relative">
                <img 
                  src="img/logo_gonzalo.png" 
                  alt="BDR Gestión Inmobiliaria" 
                  className="w-24 h-24 object-contain rounded-2xl"
                />
                <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  BDR
                </h3>
                <p className="text-white/40 text-sm font-light">
                  Bien de Raíz
                </p>
              </div>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-md font-light">
              Transformando sueños inmobiliarios en realidades a través de una gestión experta y personalizada.
            </p>
          </div>

          {/* Enlaces rápidos y Contacto combinados */}
          <div className="pl-28">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Navegación</h4>
            <div className="space-y-3">
              {['Inicio', 'Propiedades', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="block text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm font-light"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Redes sociales y Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Conecta</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: <FaFacebookF className="w-4 h-4" />, env: 'VITE_FACEBOOK_URL' },
                { icon: <FaInstagram className="w-4 h-4" />, env: 'VITE_INSTAGRAM_URL' },
                { icon: <FaLinkedinIn className="w-4 h-4" />, env: 'VITE_LINKEDIN_URL' },
                { icon: <FaWhatsapp className="w-4 h-4" />, env: 'VITE_WHATSAPP_URL' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={import.meta.env[social.env]} 
                  target="_blank" 
                  rel="noopener"
                  className="bg-white/5 hover:bg-[#981d97] border border-white/10 hover:border-[#981d97] p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:rotate-3"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
              <p className="text-white/40 text-xs mb-1">Horario atención</p>
              <p className="text-white text-sm font-light">Lun-Vie 9:00-18:00</p>
            </div>

            {/* Contacto */}
            <div className="space-y-4">
              <div className="group">
                <p className="text-white/40 text-xs mb-1">Teléfono</p>
                <a
                  href="tel:+56988985592"
                  className="text-white hover:text-[#981d97] transition-colors duration-300 text-sm font-light"
                >
                  +56 9 8898 5592
                </a>
              </div>
              <div className="group">
                <p className="text-white/40 text-xs mb-1">Email</p>
                <a
                  href="mailto:gonzalo.rojas@bienderaiz.cl"
                  className="text-white hover:text-[#981d97] transition-colors duration-300 text-sm font-light break-all"
                >
                  gonzalo.rojas@bienderaiz.cl
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Ubicación</p>
                <p className="text-white/60 text-sm font-light">Santiago, Chile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section moderna */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-white/30 text-sm font-light">
              © {new Date().getFullYear()} BDR Gestión Inmobiliaria SpA. Todos los derechos reservados.
            </div>
            <div className="flex gap-8 text-white/40 text-sm">
              <a href="/politica-privacidad" className="hover:text-white transition-colors duration-300 font-light">
                Privacidad
              </a>
              <a href="/terminos-servicio" className="hover:text-white transition-colors duration-300 font-light">
                Términos
              </a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300 font-light">
                Cookies
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Efecto de gradiente sutil en el fondo */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#981d97] to-transparent opacity-5 pointer-events-none"></div>
    </footer>
  )
}

export default Footer;