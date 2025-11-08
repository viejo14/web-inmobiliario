/**
 * Rutas de la aplicación
 */
export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/propiedades',
  PROPERTY_DETAIL: '/propiedades/:id',
  ABOUT: '/nosotros',
  SERVICES: '/servicios',
  CONTACT: '/contacto',
  PRIVACY_POLICY: '/politica-privacidad',
  NOT_FOUND: '/404'
};

/**
 * Genera una ruta de detalle de propiedad con el ID
 * @param {string|number} id - ID de la propiedad
 * @returns {string} Ruta completa
 */
export function getPropertyDetailRoute(id) {
  return `/propiedades/${id}`;
}
