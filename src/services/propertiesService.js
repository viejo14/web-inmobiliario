import { API_CONFIG, getAuthHeaders } from "./config.js";

export const fetchProperties = async (filters = {}) => {
  const excludeGuideValues = [
    "Tipo de operación",
    "Tipo de inmueble",
    "Dormitorios",
    "Baños",
  ];

  const cleanedFilters = Object.entries(filters).reduce((acc, [key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !excludeGuideValues.includes(value)
    ) {
      acc[key] = value;
    }
    return acc;
  }, {});

  const queryString =
    Object.keys(cleanedFilters).length > 0
      ? `?${new URLSearchParams(cleanedFilters).toString()}`
      : "";

  const response = await fetch(`${API_CONFIG.PROPERTIES_URL}${queryString}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener las propiedades");
  }

  const data = await response.json();

  // La API de Procanje devuelve un objeto con la estructura { data: [...] } o similar
  // Ajustamos para devolver siempre un array
  if (Array.isArray(data)) {
    return data;
  } else if (data.data && Array.isArray(data.data)) {
    return data.data;
  } else if (data.properties && Array.isArray(data.properties)) {
    return data.properties;
  }

  // Si no encontramos un array, devolvemos array vacío
  console.warn('Formato de respuesta inesperado:', data);
  return [];
};

export const fetchPropertyById = async (id) => {
  const response = await fetch(`${API_CONFIG.PROPERTIES_URL}/${id}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener el detalle de la propiedad");
  }

  const data = await response.json();

  // La API puede devolver { data: {...} } o directamente el objeto
  if (data.data) {
    return data.data;
  }

  return data;
};

export const fetchLastCreatedProperties = async (typeOfPropertyId) => {
  const queryString = typeOfPropertyId
    ? `?typeOfPropertyId=${encodeURIComponent(typeOfPropertyId)}`
    : "";

  const response = await fetch(`${API_CONFIG.LAST_CREATED_URL}${queryString}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener las últimas propiedades creadas");
  }

  const data = await response.json();

  // La API puede devolver diferentes estructuras
  if (Array.isArray(data)) {
    return data;
  } else if (data.data && Array.isArray(data.data)) {
    return data.data;
  } else if (data.properties && Array.isArray(data.properties)) {
    return data.properties;
  }

  console.warn('Formato de respuesta inesperado:', data);
  return [];
};
