import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header(){
  const [open, setOpen] = useState(false)

  return (
  <header className="w-full bg-secondary text-white relative">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-3 w-auto">

          <img src="/src/assets/img/logo_gonzalo.png" alt="Logo Gonzalo Rojas" className="w-20 h-20 object-contain rounded-full bg-zinc-900 p-0 border-2 border-gray-500 shadow-lg" />
          <div>
            <div className="text-lg font-semibold text-white">BDR Gestión Inmobiliaria SpA</div>
            <div className="text-xs text-white">Gestión e intermediación inmobiliaria</div>
          </div>

          <button
            className="md:hidden bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md transition-colors ml-3"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          </button>
        </div>

        <nav className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-4 w-full md:w-auto mt-4 md:mt-0 bg-secondary/95 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none`}>
          <Link to="/" className="bg-white/10 hover:bg-primary text-white px-5 py-2 rounded-md font-semibold text-center transition-colors">Inicio</Link>
          <Link to="/properties" className="bg-white/10 hover:bg-primary text-white px-5 py-2 rounded-md font-semibold text-center transition-colors">Propiedades</Link>
          <Link to="/nosotros" className="bg-white/10 hover:bg-primary text-white px-5 py-2 rounded-md font-semibold text-center transition-colors">Nosotros</Link>
          <Link to="/servicios" className="bg-white/10 hover:bg-primary text-white px-5 py-2 rounded-md font-semibold text-center transition-colors">Servicios</Link>
          <Link to="/contact" className="bg-white/10 hover:bg-primary text-white px-5 py-2 rounded-md font-semibold text-center transition-colors">Contáctanos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
