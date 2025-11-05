import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPropertyById } from '../services/propertiesService';
import { FaBed, FaBath, FaCar, FaRulerCombined, FaArrowLeft, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa';
import ImageLightbox from '../components/ImageLightbox';

function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPropertyById(id);
        setProperty(data);
      } catch (err) {
        console.error('Error al cargar propiedad:', err);
        setError('No se pudo cargar la propiedad. Por favor, intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  const nextImage = () => {
    if (property?.images) {
      setCurrentImageIndex((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (property?.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    }
  };

  const getCurrentImage = () => {
    if (!property?.images || property.images.length === 0) {
      return '/img/logo/logo-dark-full.png';
    }
    const image = property.images[currentImageIndex];
    return image?.path || image?.url || '/img/logo/logo-dark-full.png';
  };

  // Funciones para el lightbox
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    if (property?.images) {
      setLightboxImageIndex((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevLightboxImage = () => {
    if (property?.images) {
      setLightboxImageIndex((prev) =>
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white/90 pt-24 flex items-center justify-center">
        <div className="text-secondary text-xl">Cargando propiedad...</div>
      </main>
    );
  }

  if (error || !property) {
    return (
      <main className="min-h-screen bg-white/90 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">{error || 'Propiedad no encontrada'}</div>
          <button
            onClick={() => navigate('/properties')}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80"
          >
            Volver a propiedades
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white/90 pt-24">
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Botón volver */}
        <button
          onClick={() => navigate('/properties')}
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-semibold"
        >
          <FaArrowLeft /> Volver a propiedades
        </button>

        {/* Carrusel de imágenes */}
        <div className="relative bg-black rounded-xl overflow-hidden mb-8 group cursor-pointer" style={{ height: '500px' }}>
          <img
            src={getCurrentImage()}
            alt={property.propertyTitle}
            className="w-full h-full object-contain"
            onClick={() => openLightbox(currentImageIndex)}
            onError={(e) => {
              e.target.src = '/img/logo/logo-dark-full.png';
            }}
          />

          {/* Botón de ampliar con lupa */}
          <button
            onClick={() => openLightbox(currentImageIndex)}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
            aria-label="Ampliar imagen"
          >
            <FaSearchPlus className="text-primary text-xl" />
          </button>

          {/* Controles del carrusel */}
          {property.images && property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                <FaChevronLeft className="text-primary text-xl" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                <FaChevronRight className="text-primary text-xl" />
              </button>

              {/* Indicador de imagen */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {property.images && property.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {property.images.map((image, index) => (
              <button
                key={image.id || index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition ${
                  currentImageIndex === index ? 'border-primary' : 'border-gray-300'
                }`}
              >
                <img
                  src={image.path || image.url || '/img/logo/logo-dark-full.png'}
                  alt={`Vista ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/img/logo/logo-dark-full.png';
                  }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Información de la propiedad */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <span className="bg-primary/80 text-white text-sm px-4 py-1 rounded-full font-semibold">
                {property.typeOfPropertyId}
              </span>
              <span className="bg-primary/60 text-white text-sm px-4 py-1 rounded-full font-semibold">
                {property.typeOfOperationId}
              </span>
              {property.isExchanged && (
                <span className="bg-green-400 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  En Canje
                </span>
              )}
            </div>

            {/* Título */}
            <h1 className="text-3xl font-bold text-primary mb-2 break-words">{property.propertyTitle}</h1>

            {/* Ubicación */}
            <p className="text-gray-600 mb-4 break-words">
              {property.address?.city?.name}, {property.address?.state?.name}
            </p>

            {/* Precio */}
            <div className="bg-primary/10 inline-block px-6 py-3 rounded-lg mb-6">
              <span className="text-3xl font-bold text-primary">
                ${property.propertyPrice?.toLocaleString()}
              </span>
              <span className="text-xl text-primary ml-2">{property.currencyId || 'CLP'}</span>
            </div>

            {/* Características principales */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-primary mb-4">Características</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.characteristics?.bedrooms && (
                  <div className="flex items-center gap-2">
                    <FaBed className="text-primary text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.bedrooms}</div>
                      <div className="text-sm text-gray-600">Dormitorios</div>
                    </div>
                  </div>
                )}
                {property.characteristics?.bathrooms && (
                  <div className="flex items-center gap-2">
                    <FaBath className="text-primary text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.bathrooms}</div>
                      <div className="text-sm text-gray-600">Baños</div>
                    </div>
                  </div>
                )}
                {property.characteristics?.numberOfParkingSpaces && (
                  <div className="flex items-center gap-2">
                    <FaCar className="text-primary text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.numberOfParkingSpaces}</div>
                      <div className="text-sm text-gray-600">Estacionamientos</div>
                    </div>
                  </div>
                )}
                {property.characteristics?.surface && (
                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-primary text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.surface} m²</div>
                      <div className="text-sm text-gray-600">Superficie útil</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Descripción */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Descripción</h2>
              <div
                className="text-gray-700 whitespace-pre-line break-words overflow-wrap-anywhere prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: property.propertyDescription }}
              />
            </div>
          </div>

          {/* Columna lateral - Contacto */}
          <div className="lg:col-span-1">
            <div className="bg-primary/10 rounded-xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-primary mb-4">¿Te interesa esta propiedad?</h2>
              <p className="text-gray-700 mb-6">
                Contáctanos para más información o para agendar una visita.
              </p>
              <a
                href="/contact"
                className="block w-full bg-primary text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-primary/80 transition mb-3"
              >
                Contactar
              </a>
              {property.externalLink && (
                <a
                  href={property.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-primary text-center px-6 py-3 rounded-md font-semibold border-2 border-primary hover:bg-primary/5 transition"
                >
                  Ver en Procanje
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox para ampliar imágenes */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={property?.images || []}
        currentIndex={lightboxImageIndex}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </main>
  );
}

export default PropertyDetail;
