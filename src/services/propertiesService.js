import { API_CONFIG, getAuthHeaders } from "./config.js";

export const fetchProperties = async (filters = {}, page = 1, limit = 6) => {
  const excludeGuideValues = [
    "Tipo de operación",
    "Tipo de inmueble",
    "Dormitorios",
    "Baños",
  ];

  // Excluir solo filtros que NO existen en la API de Procanje
  const excludeFilters = ['bathrooms']; // bathrooms no existe en la API, se filtrará localmente

  const cleanedFilters = Object.entries(filters).reduce((acc, [key, value]) => {
    // Excluir filtros que no existen en la API
    if (excludeFilters.includes(key)) {
      return acc;
    }

    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !excludeGuideValues.includes(value)
    ) {
      // Mapear nombres de filtros del frontend a los nombres que espera la API de Procanje
      const mappings = {
        'stateId': 'addressRegionId',
        'cityId': 'addressComunaId',
        'typeOfProperty': 'TypeOfPropertyId',
        'typeOfOperation': 'TypeOfOperationId',
        'parkingSpaces': 'numberOfParkingSpaces',
        'minSurface': 'minConstructedSurface'
      };

      const apiKey = mappings[key] || key;
      acc[apiKey] = value;
    }
    return acc;
  }, {});

  // Si usamos filtros locales (solo bathrooms),
  // obtenemos más resultados para tener datos suficientes para filtrar
  const useLocalFilters = filters.bathrooms; // Solo bathrooms se filtra localmente
  const apiLimit = useLocalFilters ? 30 : limit; // Obtener más resultados (30 máx para evitar error 500)
  const apiPage = useLocalFilters ? 1 : page; // Siempre página 1 cuando usamos filtros locales

  // Agregar parámetros de paginación
  cleanedFilters.page = apiPage;
  cleanedFilters.limit = apiLimit;

  const queryString = `?${new URLSearchParams(cleanedFilters).toString()}`;

  const response = await fetch(`${API_CONFIG.PROPERTIES_URL}${queryString}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener las propiedades");
  }

  const data = await response.json();

  // La API de Procanje devuelve un objeto con la estructura { data: [...], meta: {...} }
  // Retornamos tanto las propiedades como el total para la paginación
  let properties = [];
  let total = 0;
  let totalPages = 1;

  if (Array.isArray(data)) {
    properties = data;
    total = data.length;
    totalPages = Math.ceil(total / limit);
  } else if (data.data && Array.isArray(data.data)) {
    properties = data.data;
    // Priorizar meta.totalItems si existe, sino usar otros campos
    total = data.meta?.totalItems || data.total || data.count || data.totalCount || data.data.length;
    totalPages = data.meta?.totalPages || Math.ceil(total / limit);
  } else if (data.properties && Array.isArray(data.properties)) {
    properties = data.properties;
    total = data.meta?.totalItems || data.total || data.count || data.totalCount || data.properties.length;
    totalPages = data.meta?.totalPages || Math.ceil(total / limit);
  } else {
    console.warn('Formato de respuesta inesperado:', data);
  }

  // Aplicar filtros locales que no soporta la API (solo bathrooms)
  let filteredProperties = properties;

  if (useLocalFilters && filters.bathrooms) {
    // Filtrar por baños (1+ significa >= 1)
    const minBathrooms = parseInt(filters.bathrooms);
    filteredProperties = filteredProperties.filter(p => {
      const propBathrooms = parseInt(p.characteristics?.bathrooms);
      return !isNaN(propBathrooms) && propBathrooms >= minBathrooms;
    });

    // Aplicar paginación local
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

    // Recalcular el total y totalPages después del filtrado local
    const filteredTotal = filteredProperties.length;
    const filteredTotalPages = Math.ceil(filteredTotal / limit);

    return {
      properties: paginatedProperties,
      total: filteredTotal,
      page,
      limit,
      totalPages: filteredTotalPages
    };
  }

  // Sin filtros locales, retornar resultados de la API directamente
  return {
    properties,
    total,
    page,
    limit,
    totalPages
  };
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
