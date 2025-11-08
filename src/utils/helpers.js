/**
 * Construye una query string a partir de un objeto de parámetros
 * @param {object} params - Objeto con parámetros
 * @returns {string} Query string
 */
export function buildQueryString(params) {
  return new URLSearchParams(params).toString();
}

/**
 * Valida si un valor está vacío
 * @param {any} value - Valor a validar
 * @returns {boolean} true si está vacío
 */
export function isEmpty(value) {
  return value === undefined || value === null || value === '' ||
         (Array.isArray(value) && value.length === 0) ||
         (typeof value === 'object' && Object.keys(value).length === 0);
}

/**
 * Espera un tiempo determinado (útil para delays)
 * @param {number} ms - Milisegundos a esperar
 * @returns {Promise} Promise que resuelve después del delay
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Maneja errores de carga de imágenes
 * @param {Event} event - Evento de error
 * @param {Function} setError - Función para setear el estado de error
 */
export function handleImageError(event, setError) {
  console.error('Error al cargar imagen:', event.target.src);
  if (setError) setError(true);
}
