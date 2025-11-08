/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} true si es válido
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida un teléfono chileno
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} true si es válido
 */
export function isValidChileanPhone(phone) {
  // Formato: +56912345678 o 912345678 o +56 9 1234 5678
  const regex = /^(\+?56)?[2-9]\d{8}$/;
  return regex.test(phone.replace(/\s/g, ''));
}

/**
 * Valida que un número esté en un rango
 * @param {number} value - Valor a validar
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @returns {boolean} true si está en el rango
 */
export function isInRange(value, min, max) {
  return value >= min && value <= max;
}

/**
 * Valida que un string no esté vacío
 * @param {string} str - String a validar
 * @returns {boolean} true si no está vacío
 */
export function isNotEmpty(str) {
  return str && str.trim().length > 0;
}
