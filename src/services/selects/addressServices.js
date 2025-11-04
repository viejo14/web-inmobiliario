import { API_CONFIG } from "../config.js";

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.COUNTRIES_ENDPOINT}`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los países");
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error al obtener países:", error);
    throw error;
  }
};

export const fetchStates = async () => {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.STATES_ENDPOINT}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No se pudieron obtener las regiones");
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error al obtener regiones:", error);
    throw error;
  }
};

export const fetchCities = async (stateId) => {
  try {
    if (!stateId) throw new Error("Se requiere un stateId válido");

    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.CITIES_ENDPOINT}?stateId=${stateId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No se pudieron obtener las comunas");
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error al obtener comunas:", error);
    throw error;
  }
};
