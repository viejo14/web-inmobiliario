import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onPreviousPage,
  onNextPage
}) => {
  // Calcular el rango de items mostrados
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generar números de página visibles
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Mostrar todas las páginas si son pocas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Mostrar páginas con ellipsis
      if (currentPage <= 3) {
        // Inicio
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Final
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Medio
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {/* Información de resultados */}
      <div className="text-sm text-secondary">
        Mostrando <span className="font-semibold">{startItem}</span> - <span className="font-semibold">{endItem}</span> de <span className="font-semibold">{totalItems}</span> propiedades
      </div>

      {/* Controles de paginación */}
      <div className="flex items-center gap-2">
        {/* Botón Anterior */}
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/80'
          }`}
          aria-label="Página anterior"
        >
          <FaChevronLeft className="w-3 h-3" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        {/* Números de página */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className="px-3 py-2 text-secondary">
                  ...
                </span>
              );
            }

            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`min-w-[40px] px-3 py-2 rounded-md font-semibold transition ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'bg-white text-secondary hover:bg-primary/10 border border-gray-300'
                }`}
                aria-label={`Ir a página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/80'
          }`}
          aria-label="Página siguiente"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <FaChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
