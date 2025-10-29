import React, { useEffect, useState } from 'react';
// Puedes importar PropertyCard si ya existe
// import PropertyCard from '../components/PropertyCard';

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Reemplaza la URL por la ruta real de la API de procanje.com
    fetch('https://procanje.com/api/properties')
      .then(res => res.json())
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-white/90">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8">Encuentra Tu Hogar</h1>
        {/* Filtros de búsqueda */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/30 p-6 mb-10 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <select className="border rounded-md px-3 py-2 w-full" defaultValue=""> <option value="">Tipo de operación</option> </select>
            <select className="border rounded-md px-3 py-2 w-full" defaultValue=""> <option value="">Tipo de inmueble</option> </select>
            <select className="border rounded-md px-3 py-2 w-full" defaultValue=""> <option value="">Región</option> </select>
            <select className="border rounded-md px-3 py-2 w-full" defaultValue=""> <option value="">Comuna</option> </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <select className="border rounded-md px-3 py-2 w-full" defaultValue=""> <option value="">Dormitorios</option> </select>
            <select className="border rounded-md px-3 py-2 w-full" defaultValue=""> <option value="">Baños</option> </select>
            <input type="number" className="border rounded-md px-3 py-2 w-full" placeholder="Superficie útil mínima (m²)" />
            <select className="border rounded-md px-3 py-2 w-full" defaultValue=""> <option value="">Estacionamiento</option> </select>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-200 px-6 py-2 rounded-md font-semibold">Limpiar</button>
            <button className="bg-primary text-white px-6 py-2 rounded-md font-semibold">Buscar</button>
          </div>
        </div>
        {/* Listado de propiedades */}
        <section className="bg-secondary/5 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-6">Todas las Propiedades</h2>
          {loading ? (
            <div className="text-secondary">Cargando propiedades...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.length === 0 ? (
                <div className="col-span-3 text-secondary">No se encontraron propiedades.</div>
              ) : (
                properties.map((prop, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow p-4">
                    <div className="h-40 bg-gray-100 rounded mb-4">
                      {prop.image && <img src={prop.image} alt={prop.title} className="w-full h-full object-cover rounded" />}
                    </div>
                    <div className="font-bold text-primary mb-2">{prop.title}</div>
                    <div className="text-secondary text-sm">{prop.location}</div>
                  </div>
                ))
              )}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
