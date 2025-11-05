import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/propertiesService';
import PropertiesList from './components/properties/PropertiesList';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para los filtros
  const [filters, setFilters] = useState({
    typeOfOperation: '',
    typeOfProperty: '',
    region: '',
    city: '',
    bedrooms: '',
    bathrooms: '',
    minSurface: '',
    parkingSpaces: ''
  });

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (err) {
        console.error('Error al cargar propiedades:', err);
        setError('No se pudieron cargar las propiedades. Por favor, intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  // Función para manejar cambios en los filtros
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        [filterName]: value
      };

      // Si se cambia la región, limpiar el filtro de ciudad
      if (filterName === 'region') {
        newFilters.city = '';
      }

      return newFilters;
    });
  };

  // Función para aplicar los filtros
  const applyFilters = () => {
    let filtered = [...properties];

    // Filtrar por tipo de operación
    if (filters.typeOfOperation) {
      filtered = filtered.filter(prop =>
        prop.typeOfOperationId?.toLowerCase() === filters.typeOfOperation.toLowerCase()
      );
    }

    // Filtrar por tipo de propiedad
    if (filters.typeOfProperty) {
      filtered = filtered.filter(prop =>
        prop.typeOfPropertyId?.toLowerCase() === filters.typeOfProperty.toLowerCase()
      );
    }

    // Filtrar por región
    if (filters.region) {
      filtered = filtered.filter(prop =>
        prop.address?.state?.name?.toLowerCase().includes(filters.region.toLowerCase())
      );
    }

    // Filtrar por ciudad/comuna
    if (filters.city) {
      filtered = filtered.filter(prop =>
        prop.address?.city?.name?.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    // Filtrar por dormitorios
    if (filters.bedrooms) {
      filtered = filtered.filter(prop =>
        prop.characteristics?.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    // Filtrar por baños
    if (filters.bathrooms) {
      filtered = filtered.filter(prop =>
        prop.characteristics?.bathrooms >= parseInt(filters.bathrooms)
      );
    }

    // Filtrar por superficie mínima
    if (filters.minSurface) {
      filtered = filtered.filter(prop =>
        prop.characteristics?.surface >= parseInt(filters.minSurface)
      );
    }

    // Filtrar por estacionamientos
    if (filters.parkingSpaces) {
      filtered = filtered.filter(prop =>
        prop.characteristics?.numberOfParkingSpaces >= parseInt(filters.parkingSpaces)
      );
    }

    setFilteredProperties(filtered);
  };

  // Función para limpiar los filtros
  const clearFilters = () => {
    setFilters({
      typeOfOperation: '',
      typeOfProperty: '',
      region: '',
      city: '',
      bedrooms: '',
      bathrooms: '',
      minSurface: '',
      parkingSpaces: ''
    });
    setFilteredProperties(properties);
  };

  // Obtener valores únicos para los selects
  const getUniqueOperations = () => {
    const operations = properties.map(p => p.typeOfOperationId).filter(Boolean);
    return [...new Set(operations)];
  };

  const getUniquePropertyTypes = () => {
    const types = properties.map(p => p.typeOfPropertyId).filter(Boolean);
    return [...new Set(types)];
  };

  const getUniqueRegions = () => {
    const regions = properties.map(p => p.address?.state?.name).filter(Boolean);
    return [...new Set(regions)];
  };

  const getUniqueCities = () => {
    // Si hay una región seleccionada, filtrar ciudades solo de esa región
    if (filters.region) {
      const cities = properties
        .filter(p => p.address?.state?.name === filters.region)
        .map(p => p.address?.city?.name)
        .filter(Boolean);
      return [...new Set(cities)];
    }
    // Si no hay región seleccionada, mostrar todas las ciudades
    const cities = properties.map(p => p.address?.city?.name).filter(Boolean);
    return [...new Set(cities)];
  };

  return (
    <main className="min-h-screen bg-white/90">
      <section className="max-w-[90rem] mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8">Encuentra Tu Hogar</h1>
        {/* Filtros de búsqueda */}
        <div className="bg-primary/10 backdrop-blur-md rounded-xl border border-white/30 p-6 mb-10 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Tipo de operación */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.typeOfOperation}
              onChange={(e) => handleFilterChange('typeOfOperation', e.target.value)}
            >
              <option value="">Tipo de operación</option>
              {getUniqueOperations().map(op => (
                <option key={op} value={op}>{op}</option>
              ))}
            </select>

            {/* Tipo de propiedad */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.typeOfProperty}
              onChange={(e) => handleFilterChange('typeOfProperty', e.target.value)}
            >
              <option value="">Tipo de inmueble</option>
              {getUniquePropertyTypes().map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Región */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.region}
              onChange={(e) => handleFilterChange('region', e.target.value)}
            >
              <option value="">Región</option>
              {getUniqueRegions().map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>

            {/* Ciudad/Comuna */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
            >
              <option value="">Comuna</option>
              {getUniqueCities().map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Dormitorios */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            >
              <option value="">Dormitorios</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>

            {/* Baños */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.bathrooms}
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            >
              <option value="">Baños</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>

            {/* Superficie mínima */}
            <input
              type="number"
              className="border rounded-md px-3 py-2 w-full"
              placeholder="Superficie útil mínima (m²)"
              value={filters.minSurface}
              onChange={(e) => handleFilterChange('minSurface', e.target.value)}
            />

            {/* Estacionamientos */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.parkingSpaces}
              onChange={(e) => handleFilterChange('parkingSpaces', e.target.value)}
            >
              <option value="">Estacionamiento</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              onClick={clearFilters}
              className="bg-gray-200 px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition"
            >
              Limpiar
            </button>
            <button
              onClick={applyFilters}
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary/80 transition"
            >
              Buscar
            </button>
          </div>
        </div>
        {/* Listado de propiedades */}
        <section className="bg-primary/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-6">Todas las Propiedades</h2>
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-secondary text-lg">Cargando propiedades...</div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-red-600 text-lg">{error}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.length === 0 ? (
                <div className="col-span-3 text-secondary text-center py-12">
                  No se encontraron propiedades con los filtros seleccionados.
                </div>
              ) : (
                <PropertiesList properties={filteredProperties} />
              )}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default Properties;
