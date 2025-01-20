export default function Pag({ page, setPage, totalPages }) {
  return (
    <div className="pagination flex justify-between items-center w-full max-w-7xl mx-auto space-x-4 p-4">
      {/* Botón Anterior */}
      <button
        onClick={() => setPage(page > 1 ? page - 1 : 1)}
        className="prev-button p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex-1 sm:flex-none"
        disabled={page === 1}
      >
        Anterior
      </button>

      {/* Información de la página actual */}
      <p className="text-gray text-center py-20 flex-1 sm:flex-none">
        Página {page} de {totalPages}
      </p>

      {/* Botón Siguiente */}
      <button
        onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
        className="next-button p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex-1 sm:flex-none"
        disabled={page === totalPages}
      >
        Siguiente
      </button>
    </div>
  )
}
