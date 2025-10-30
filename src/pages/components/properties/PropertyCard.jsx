import React from 'react'

const PropertyCard = ({ property }) => {
  // ...existing code...
  return (
    <div className="bg-white rounded-xl shadow-lg border border-primary/20 p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
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
      <h3 className="text-lg font-bold text-primary mb-2 text-center">{property.propertyTitle}</h3>
      <p className="text-gray-700 text-sm mb-2 text-center">{property.propertyDescription}</p>
      <p className="text-xs text-gray-500 text-center">Usuario: {property.user.session.email}</p>
    </div>
  )
}

export default PropertyCard
