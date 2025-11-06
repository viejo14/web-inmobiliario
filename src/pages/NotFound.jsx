import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaExclamationTriangle } from 'react-icons/fa';

function NotFound() {
  return (
    <main className="min-h-screen bg-white/90 pt-24 pb-12 flex items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#981d97] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#981d97] opacity-5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icono de advertencia */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary/10 p-8 rounded-full">
            <FaExclamationTriangle className="text-primary text-6xl md:text-8xl" />
          </div>
        </div>

        {/* Número 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>

        {/* Mensaje */}
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
          Página no encontrada
        </h2>
        <p className="text-base md:text-lg text-secondary/70 mb-8 max-w-2xl mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
          Puede que hayas escrito mal la dirección o que la página haya sido eliminada.
        </p>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            <FaHome className="text-lg" />
            Ir al inicio
          </Link>
          <Link
            to="/propiedades"
            className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md font-semibold border-2 border-primary hover:bg-primary/5 transition-colors w-full sm:w-auto"
          >
            <FaBuilding className="text-lg" />
            Ver propiedades
          </Link>
        </div>

        {/* Información adicional */}
        <div className="mt-12 pt-8 border-t border-secondary/20">
          <p className="text-sm text-secondary/60">
            Si crees que esto es un error, por favor{' '}
            <Link to="/contacto" className="text-primary hover:underline font-semibold">
              contáctanos
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
