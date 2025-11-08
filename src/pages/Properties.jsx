import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/propertiesService';
import PropertiesList from '../components/properties/PropertiesList';
import Pagination from '../components/ui/Pagination';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const [propertiesPerPage] = useState(6);

  // Estados para los filtros
  const [filters, setFilters] = useState({
    typeOfOperation: '',
    typeOfProperty: '',
    stateId: '',
    cityId: '',
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
        const response = await fetchProperties({}, currentPage, propertiesPerPage);
        setProperties(response.properties);
        setFilteredProperties(response.properties);
        setTotalPages(response.totalPages);
        setTotalProperties(response.total);
      } catch (err) {
        console.error('Error al cargar propiedades:', err);
        setError('No se pudieron cargar las propiedades. Por favor, intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
    // Scroll al inicio cuando cambia la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, propertiesPerPage]);

  // Función para manejar cambios en los filtros
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        [filterName]: value
      };

      // Si se cambia la región, limpiar el filtro de ciudad
      if (filterName === 'stateId') {
        newFilters.cityId = '';
      }

      return newFilters;
    });
  };

  // Función para aplicar los filtros
  const applyFilters = async () => {
    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1); // Resetear a la primera página

      const response = await fetchProperties(filters, 1, propertiesPerPage);
      setFilteredProperties(response.properties);
      setTotalPages(response.totalPages);
      setTotalProperties(response.total);
    } catch (err) {
      console.error('Error al aplicar filtros:', err);
      setError('Error al aplicar los filtros. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  // Funciones para navegación de páginas
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para limpiar los filtros
  const clearFilters = async () => {
    setFilters({
      typeOfOperation: '',
      typeOfProperty: '',
      stateId: '',
      cityId: '',
      bedrooms: '',
      bathrooms: '',
      minSurface: '',
      parkingSpaces: ''
    });

    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1);

      const response = await fetchProperties({}, 1, propertiesPerPage);
      setFilteredProperties(response.properties);
      setProperties(response.properties);
      setTotalPages(response.totalPages);
      setTotalProperties(response.total);
    } catch (err) {
      console.error('Error al limpiar filtros:', err);
      setError('Error al cargar las propiedades. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
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
    const regionsMap = new Map();
    properties.forEach(p => {
      if (p.address?.state?.id && p.address?.state?.name) {
        regionsMap.set(p.address.state.id, p.address.state.name);
      }
    });
    return Array.from(regionsMap, ([id, name]) => ({ id, name }));
  };

  const getUniqueCities = () => {
    const citiesMap = new Map();

    // Si hay una región seleccionada, filtrar ciudades solo de esa región
    if (filters.stateId) {
      properties
        .filter(p => p.address?.state?.id == filters.stateId)
        .forEach(p => {
          if (p.address?.city?.id && p.address?.city?.name) {
            citiesMap.set(p.address.city.id, p.address.city.name);
          }
        });
    } else {
      // Si no hay región seleccionada, mostrar todas las ciudades
      properties.forEach(p => {
        if (p.address?.city?.id && p.address?.city?.name) {
          citiesMap.set(p.address.city.id, p.address.city.name);
        }
      });
    }

    return Array.from(citiesMap, ([id, name]) => ({ id, name }));
  };

  return (
    <main className="min-h-screen bg-white/90">
      {/* Imagen decorativa debajo del header */}
      <div className="w-full" style={{marginTop: '0px'}}>
        <img
          src="/img/img-carrusel-hero/casa-en-l-madrid-iluminacion-led-porches.jpg"
          alt="Decoración Propiedades"
          className="w-full"
          style={{
            height: '420px',
            objectFit: 'cover',
            opacity: 0.9,
            boxShadow: '0 12px 40px 0 rgba(0,0,0,0.18)'
          }}
        />
      </div>
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
              value={filters.stateId}
              onChange={(e) => handleFilterChange('stateId', e.target.value)}
            >
              <option value="">Región</option>
              {getUniqueRegions().map(region => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>

            {/* Ciudad/Comuna */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.cityId}
              onChange={(e) => handleFilterChange('cityId', e.target.value)}
            >
              <option value="">Comuna</option>
              {getUniqueCities().map(city => (
                <option key={city.id} value={city.id}>{city.name}</option>
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
              <option value="1">1 dormitorio</option>
              <option value="2">2 dormitorios</option>
              <option value="3">3 dormitorios</option>
              <option value="4">4 dormitorios</option>
              <option value="5">5 dormitorios</option>
            </select>

            {/* Baños */}
            <select
              className="border rounded-md px-3 py-2 w-full"
              value={filters.bathrooms}
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            >
              <option value="">Baños</option>
              <option value="1">1 o más baños</option>
              <option value="2">2 o más baños</option>
              <option value="3">3 o más baños</option>
              <option value="4">4 o más baños</option>
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
              <option value="1">1 estacionamiento</option>
              <option value="2">2 estacionamientos</option>
              <option value="3">3 estacionamientos</option>
              <option value="4">4 estacionamientos</option>
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
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.length === 0 ? (
                  <div className="col-span-3 text-secondary text-center py-12">
                    No se encontraron propiedades con los filtros seleccionados.
                  </div>
                ) : (
                  <PropertiesList properties={filteredProperties} />
                )}
              </div>

              {/* Componente de paginación */}
              {filteredProperties.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={totalProperties}
                  itemsPerPage={propertiesPerPage}
                  onPageChange={handlePageChange}
                  onPreviousPage={handlePreviousPage}
                  onNextPage={handleNextPage}
                />
              )}
            </>
          )}
        </section>
      </section>
    </main>
  );
}

export default Properties;
