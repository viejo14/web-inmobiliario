import React from 'react'
// Función para limitar el largo de un string
function truncateText(text, maxLength) {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  // ...existing code...
  return (
  <div className="bg-white rounded-xl shadow-lg border border-primary/20 p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200 h-full min-h-[34rem]">
      <img
        src={
          property.images?.[0] ??
          property.images?.[1] ??
          property.images?.[2] ??
          '/img/logo/logo-dark-full.png'
        }
        alt={property.propertyTitle}
        className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-200"
      />
      {/* Etiquetas tipo de propiedad y operación */}
      <div className="flex gap-2 mb-2 w-full justify-start">
        <span className="bg-primary/80 text-white text-xs px-3 py-1 rounded-full font-semibold">{property.typeOfPropertyId}</span>
        <span className="bg-primary/60 text-white text-xs px-3 py-1 rounded-full font-semibold">{property.typeOfOperationId}</span>
        {property.isExchanged && <span className="bg-green-400 text-white text-xs px-3 py-1 rounded-full font-semibold">En Canje</span>}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2 text-center">{truncateText(property.propertyTitle, 50)}</h3>
      <p className="text-gray-700 text-sm mb-2 text-center">{truncateText(property.propertyDescription, 100)}</p>
      {/* Dirección */}
      <p className="text-xs text-gray-500 mb-2 text-center">
        {property.address?.city?.name}, {property.address?.state?.name}
      </p>
      {/* Precios */}
      <div className="flex gap-4 justify-center mb-2">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded font-bold text-sm">${property.propertyPrice}</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded font-bold text-sm">{property.currencyId === 'CLP' ? 'CLP' : property.currencyId}</span>
      </div>
      {/* Características principales según tipo de inmueble */}
      <div className="flex flex-wrap gap-4 justify-center mb-2">
        {/* Casa y Departamento */}
        {(property.typeOfPropertyId === 'Casa' || property.typeOfPropertyId === 'Departamento') && (
          <>
            {property.characteristics?.bedrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBed className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bedrooms} Dorm.
              </span>
            )}
            {property.characteristics?.bathrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {property.characteristics?.numberOfParkingSpaces && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.numberOfParkingSpaces} Estac.
              </span>
            )}
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
          </>
        )}
        {/* Oficina */}
        {property.typeOfPropertyId === 'Oficina' && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {/* Puedes agregar más campos específicos de oficina aquí */}
            {property.characteristics?.bathrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {property.characteristics?.numberOfParkingSpaces && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.numberOfParkingSpaces} Estac.
              </span>
            )}
          </>
        )}
        {/* Local comercial, Bodega */}
        {(property.typeOfPropertyId === 'Local comercial' || property.typeOfPropertyId === 'Bodega') && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {property.characteristics?.bathrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {property.characteristics?.numberOfParkingSpaces && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.numberOfParkingSpaces} Estac.
              </span>
            )}
          </>
        )}
        {/* Parcela, Terreno */}
        {(property.typeOfPropertyId === 'Parcela' || property.typeOfPropertyId === 'Terreno') && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² totales
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
          </>
        )}
      </div>
      {/* Botones */}
      <div className="flex gap-2 mt-auto w-full justify-center">
        <a href={property.externalLink} target="_blank" rel="noopener" className="bg-primary/10 text-primary px-4 py-2 rounded font-semibold text-xs hover:bg-primary/20 transition">Detalles</a>
        <a href="/contact" className="bg-primary text-white px-4 py-2 rounded font-semibold text-xs hover:bg-primary/80 transition">Contactar</a>
      </div>
    </div>
  )
}

export default PropertyCard
