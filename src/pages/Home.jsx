import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCheck, FaAward, FaRegEye, FaNetworkWired } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />

      {/* Ventajas de la empresa */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <FaUserCheck className="w-16 h-16 mb-3 text-white/90" />
          <div className="font-bold text-primary mb-1">Atención personalizada</div>
          <div className="text-white text-center text-sm">Te acompañamos en cada paso del proceso.</div>
        </div>
        <div className="flex flex-col items-center">
          <FaAward className="w-16 h-16 mb-3 text-white/90" />
          <div className="font-bold text-primary mb-1">Experiencia comprobada</div>
          <div className="text-white text-center text-sm">Años de trayectoria en el rubro inmobiliario.</div>
        </div>
        <div className="flex flex-col items-center">
          <FaRegEye className="w-16 h-16 mb-3 text-white/90" />
          <div className="font-bold text-primary mb-1">Transparencia</div>
          <div className="text-white text-center text-sm">Procesos claros y honestos para tu tranquilidad.</div>
        </div>
        <div className="flex flex-col items-center">
          <FaNetworkWired className="w-16 h-16 mb-3 text-white/90" />
          <div className="font-bold text-primary mb-1">Red de brókers</div>
          <div className="text-white text-center text-sm">Acceso a las mejores oportunidades del mercado.</div>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-primary mb-6 text-center">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <a href="/servicios" className="flex flex-col items-center justify-center bg-white/90 rounded-full shadow-lg w-64 h-64 p-8 hover:bg-primary/10 transition">
            <img src="/src/assets/img/Intermediación-asesoría-inmobiliaria.jpg" alt="Intermediación" className="w-24 h-24 mb-4 rounded-full object-cover" />
            <div className="font-semibold text-primary text-lg text-center">Intermediación y asesoría</div>
          </a>
          <a href="/servicios" className="flex flex-col items-center justify-center bg-white/90 rounded-full shadow-lg w-64 h-64 p-8 hover:bg-primary/10 transition">
            <img src="/src/assets/img/Compra-venta,-arriendo-permuta.jpg" alt="Compra y venta" className="w-24 h-24 mb-4 rounded-full object-cover" />
            <div className="font-semibold text-primary text-lg text-center">Compra, venta, arriendo</div>
          </a>
          <a href="/servicios" className="flex flex-col items-center justify-center bg-white/90 rounded-full shadow-lg w-64 h-64 p-8 hover:bg-primary/10 transition">
            <img src="/src/assets/img/Tasaciones-profesionales.jpg" alt="Tasaciones" className="w-24 h-24 mb-4 rounded-full object-cover" />
            <div className="font-semibold text-primary text-lg text-center">Tasaciones profesionales</div>
          </a>
        </div>
      </section>

      {/* Testimonios de clientes */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-primary mb-6 text-center">Testimonios de clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 rounded-xl shadow p-6">
            <div className="flex gap-1 mb-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <div className="text-secondary mb-2">“Excelente atención y acompañamiento en todo el proceso. ¡Recomendados!”</div>
            <div className="font-bold text-primary text-sm">Juan P.</div>
          </div>
          <div className="bg-white/90 rounded-xl shadow p-6">
            <div className="flex gap-1 mb-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <div className="text-secondary mb-2">“Vendí mi propiedad rápido y sin complicaciones. Muy profesionales.”</div>
            <div className="font-bold text-primary text-sm">María G.</div>
          </div>
          <div className="bg-white/90 rounded-xl shadow p-6">
            <div className="flex gap-1 mb-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <div className="text-secondary mb-2">“Me ayudaron a encontrar la casa ideal para mi familia.”</div>
            <div className="font-bold text-primary text-sm">Carlos S.</div>
          </div>
        </div>
      </section>

      {/* Contacto rápido */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-primary mb-6">¿Tienes dudas o quieres cotizar?</h2>
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg inline-block hover:bg-primary/80 transition">Contáctanos</Link>
      </section>

      <main className="bg-secondary">
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default Home;
