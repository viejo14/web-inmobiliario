/**
 * Limpia HTML tags y limita el largo de un string
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado
 */
export function truncateText(text, maxLength) {
  if (!text) return '';
  // Eliminar todas las etiquetas HTML
  const cleanText = text.replace(/<[^>]*>/g, '');
  return cleanText.length > maxLength ? cleanText.slice(0, maxLength) + '...' : cleanText;
}

/**
 * Formatea un número como moneda
 * @param {number} amount - Monto a formatear
 * @param {string} currency - Código de moneda (CLP, USD, etc.)
 * @returns {string} Monto formateado
 */
export function formatCurrency(amount, currency = 'CLP') {
  if (!amount) return '0';
  return `$${amount.toLocaleString()} ${currency}`;
}

/**
 * Obtiene la primera imagen disponible de una propiedad
 * @param {object} property - Objeto de propiedad
 * @returns {string|null} URL de la imagen o null
 */
export function getPropertyImage(property) {
  // Si images es un array de objetos con path
  if (property.images && Array.isArray(property.images) && property.images.length > 0) {
    const firstImage = property.images[0];

    // Si el elemento es un string directo
    if (typeof firstImage === 'string') {
      return firstImage;
    }

    // Si el elemento es un objeto con path (estructura de Procanje)
    if (typeof firstImage === 'object' && firstImage.path) {
      return firstImage.path;
    }

    // Si el elemento es un objeto, intentar otras propiedades
    if (typeof firstImage === 'object') {
      const imageUrl = firstImage.url ||
                      firstImage.imageUrl ||
                      firstImage.src ||
                      firstImage.link;

      if (imageUrl) {
        return imageUrl;
      }
    }
  }

  // Si tiene una propiedad mainImage
  if (property.mainImage) {
    return typeof property.mainImage === 'string' ? property.mainImage : property.mainImage.url;
  }

  // No hay imagen disponible
  return null;
}
