// Configuración centralizada de la API de Procanje
const API_BASE_URL = import.meta.env.VITE_PROCANJE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_PROCANJE_API_KEY;

// Endpoints principales
export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  API_KEY: API_KEY,

  // URLs completas
  PROPERTIES_URL: `${API_BASE_URL}/properties-portal-key`,
  LAST_CREATED_URL: `${API_BASE_URL}/properties-portal-key/last-created`,

  // Endpoints de direcciones
  COUNTRIES_ENDPOINT: "/countries?paginated=false",
  STATES_ENDPOINT: "/states?paginated=false",
  CITIES_ENDPOINT: "/city",
};

// Headers comunes para requests con autenticación
export const getAuthHeaders = () => ({
  "USER-PORTAL-KEY": API_KEY,
});
