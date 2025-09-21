import { SEARCH_TYPES } from '../constants'

export default function EmptyState ({ searchType, query }) {
  const currentConfig = SEARCH_TYPES[searchType]

  return (
    <div className='text-center py-12'>
      <div className='bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-300 justify-self-center w-md '>
        <div className='text-6xl mb-4'>🔍</div>
        <p className='text-3xl text-gray-700 font-bold mb-2'>
          No se encontraron {currentConfig.label.toLowerCase()}
        </p>
        <p className='text-xl text-gray-600 break-words'>
          {query
            ? `No hay resultados para "${query}"`
            : `Intenta buscando otro ${searchType === 'characters' ? 'personaje' : searchType === 'locations' ? 'lugar' : 'episodio'}`}
        </p>
      </div>
    </div>
  )
}
