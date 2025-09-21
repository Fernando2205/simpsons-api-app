// src/components/NavigationControls.jsx
export default function NavigationControls ({
  page,
  pageInput,
  setPageInput,
  handlePageInputSubmit,
  goToNextPage,
  goToPreviousPage,
  loading
}) {
  return (
    <div className='bg-white rounded-2xl shadow-lg border-2 border-yellow-300 p-6 mb-8'>
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        <button
          disabled={page === 1 || loading}
          onClick={goToPreviousPage}
          className='px-6 py-3 bg-blue-500 text-white font-bold text-xl rounded-xl hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300 shadow-md disabled:shadow-none hover:cursor-pointer'
        >
          ← Anterior
        </button>

        <div className='bg-yellow-100 px-4 py-3 rounded-xl border-2 border-yellow-300'>
          <span className='font-bold text-gray-800 text-xl'>Página {page}</span>
        </div>

        <form onSubmit={handlePageInputSubmit} className='flex items-center gap-2'>
          <input
            type='number'
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            placeholder='1'
            min='1'
            className='w-28 px-3 py-3 border-2 border-gray-300 rounded-xl text-center font-bold text-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all overflow-hidden hover:cursor-pointer duration-300'
          />
          <button
            type='submit'
            disabled={!pageInput}
            className='px-4 py-3 bg-green-500 text-white font-bold text-xl rounded-xl hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md disabled:shadow-none hover:cursor-pointer duration-300'
          >
            Ir
          </button>
        </form>

        <button
          disabled={loading}
          onClick={goToNextPage}
          className='px-6 py-3 bg-blue-500 text-white font-bold text-xl rounded-xl hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md disabled:shadow-none hover:cursor-pointer'
        >
          Siguiente →
        </button>
      </div>
    </div>
  )
}
