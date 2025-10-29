import React from 'react'

export default function PropertyCard({ title = 'Propiedad Ejemplo', price = '$0', image }){
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden shadow-md">
      <div className="h-40 md:h-56 bg-zinc-800 flex items-center justify-center">{image ? <img src={image} alt={title} className="object-cover h-full w-full"/> : <span className="text-white/80">Imagen</span>}</div>
      <div className="p-4">
        <h4 className="text-white font-semibold">{title}</h4>
        <div className="text-white/80 mt-2">{price}</div>
      </div>
    </div>
  )
}
