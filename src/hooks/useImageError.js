import { useState } from 'react';

/**
 * Hook para manejar errores de carga de imágenes
 * @returns {object} { imageError, setImageError, handleImageError, resetImageError }
 */
export function useImageError() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const resetImageError = () => {
    setImageError(false);
  };

  return {
    imageError,
    setImageError,
    handleImageError,
    resetImageError
  };
}
