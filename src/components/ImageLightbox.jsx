import { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Componente Lightbox para visualizar imágenes en pantalla completa
 * @param {boolean} isOpen - Controla si el lightbox está abierto
 * @param {Function} onClose - Callback para cerrar el lightbox
 * @param {Array} images - Array de imágenes con estructura {id, path} o strings
 * @param {number} currentIndex - Índice de la imagen actual
 * @param {Function} onNext - Callback para imagen siguiente
 * @param {Function} onPrev - Callback para imagen anterior
 */
function ImageLightbox({ isOpen, onClose, images, currentIndex, onNext, onPrev }) {
  if (!isOpen || !images || images.length === 0) return null;

  const getCurrentImageUrl = () => {
    const image = images[currentIndex];
    if (typeof image === 'string') return image;
    return image?.path || image?.url || '/img/logo/logo-dark-full.png';
  };

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Navegación con flechas del teclado
  useEffect(() => {
    const handleKeyNav = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyNav);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyNav);
    };
  }, [isOpen, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
        aria-label="Cerrar"
      >
        <FaTimes className="text-4xl" />
      </button>

      {/* Contador de imágenes */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full text-lg z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Imagen principal */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={getCurrentImageUrl()}
          alt={`Imagen ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            e.target.src = '/img/logo/logo-dark-full.png';
          }}
        />

        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition"
              aria-label="Imagen anterior"
            >
              <FaChevronLeft className="text-primary text-2xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition"
              aria-label="Imagen siguiente"
            >
              <FaChevronRight className="text-primary text-2xl" />
            </button>
          </>
        )}
      </div>

      {/* Instrucciones */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        Usa las flechas del teclado o los botones para navegar • ESC para cerrar
      </div>
    </div>
  );
}

export default ImageLightbox;
