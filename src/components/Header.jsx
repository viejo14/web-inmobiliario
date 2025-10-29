import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
  <header className="w-full bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <img src="/src/assets/img/logo_gonzalo.png" alt="Logo Gonzalo Rojas" className="w-12 h-12 object-contain rounded-full bg-white p-0 border border-gray-300" />
          <div>
            <div className="text-lg font-semibold text-white">BDR Gestión Inmobiliaria SpA</div>
            <div className="text-xs text-white">Gestión e intermediación inmobiliaria</div>
          </div>
        </div>

        <button
          className="mt-3 md:mt-0 md:hidden bg-white/5 px-3 py-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
        </button>

        <nav className={`w-full md:w-auto ${open ? 'block' : 'hidden'} md:flex items-center gap-4 text-sm mt-3 md:mt-0`}>
          <Link to="/" className="bg-primary text-white px-5 py-2 rounded-md font-semibold block md:inline-block transition-colors hover:bg-primary/80">Inicio</Link>
          <Link to="/properties" className="bg-primary text-white px-5 py-2 rounded-md font-semibold block md:inline-block transition-colors hover:bg-primary/80">Propiedades</Link>
          <Link to="/nosotros" className="bg-primary text-white px-5 py-2 rounded-md font-semibold block md:inline-block transition-colors hover:bg-primary/80">Nosotros</Link>
          <Link to="/servicios" className="bg-primary text-white px-5 py-2 rounded-md font-semibold block md:inline-block transition-colors hover:bg-primary/80">Servicios</Link>
        </nav>
      </div>
    </header>
  )
}
