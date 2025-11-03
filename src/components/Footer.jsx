import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Footer(){
  return (
  <footer className="w-full bg-gradient-to-l from-primary via-secondary to-primary text-white shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Enlaces rápidos + Logo */}
        <div className="flex flex-col gap-2 text-sm md:text-left text-center items-center md:items-start">
          <img src="/src/assets/img/logo_gonzalo.png" alt="Logo Gonzalo Rojas" className="bg-zinc-900 w-20 h-20 object-contain rounded-full p-0 border border-gray-500 shadow-lg mb-2" />
          <span className="font-bold mb-2">Enlaces rápidos</span>
          <a href="/" className="hover:underline">Inicio</a>
          <a href="/properties" className="hover:underline">Propiedades</a>
          <a href="/nosotros" className="hover:underline">Nosotros</a>
          <a href="/servicios" className="hover:underline">Servicios</a>
          <a href="/contact" className="hover:underline">Contacto</a>
        </div>
        {/* Información de contacto */}
        <div className="flex flex-col gap-2 text-sm text-center">
          <span className="font-bold mb-2">Contacto</span>
          <span>Tel: <a href="tel:+56988985592" className="underline">+56 9 8898 5592</a></span>
          <span>Email: <a href="mailto:gonzalo.rojas@bienderaiz.cl" className="underline">gonzalo.rojas@bienderaiz.cl</a></span>
          <span>Dirección: Santiago, Chile</span>
          <span>Horario: Lun-Vie 9:00-18:00</span>
        </div>
        {/* Redes sociales */}
        <div className="flex flex-col gap-2 items-center">
          <span className="font-bold mb-2">Síguenos</span>
          <div className="flex gap-4">
            <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank" rel="noopener" aria-label="Facebook" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaFacebookF className="w-7 h-7" /></a>
            <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaInstagram className="w-7 h-7" /></a>
            <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaLinkedinIn className="w-7 h-7" /></a>
            <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaWhatsapp className="w-7 h-7" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs border-t border-white/20 mt-4">
  © {new Date().getFullYear()} BDR Gestión Inmobiliaria SpA · Todos los derechos reservados · <a href="/politica-privacidad" className="underline">Política de privacidad</a>
      </div>
    </footer>
  )
}

export default Footer;
