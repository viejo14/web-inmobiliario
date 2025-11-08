import { useState, useMemo } from 'react';

/**
 * Hook para manejar paginación
 * @param {number} totalItems - Total de items
 * @param {number} itemsPerPage - Items por página
 * @returns {object} Estado y funciones de paginación
 */
export function usePagination(totalItems, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage);
  }, [totalItems, itemsPerPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  const firstPage = () => {
    goToPage(1);
  };

  const lastPage = () => {
    goToPage(totalPages);
  };

  const reset = () => {
    setCurrentPage(1);
  };

  return {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    reset,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  };
}
