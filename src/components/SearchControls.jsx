import { SEARCH_TYPES } from '../constants'

export default function SearchControls ({
  searchType,
  onSearchTypeChange,
  query,
  onQueryChange
}) {
  const currentConfig = SEARCH_TYPES[searchType]

  return (
    <div className='bg-white rounded-2xl shadow-lg border-2 border-yellow-300 p-6 mb-8'>
      {/* Selector tipo de búsqueda */}
      <div className='mb-6'>
        <label className='block text-gray-700 font-bold mb-3 text-2xl'>
          ¿Qué quieres buscar?
        </label>
        <select
          value={searchType}
          onChange={onSearchTypeChange}
          className='w-full md:w-auto px-4 py-3 text-2xl border-2 border-gray-300 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white font-bold'
        >
          {Object.entries(SEARCH_TYPES).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
      </div>

      {/* Barra de búsqueda */}
      <div className='mb-6'>
        <label className='block text-gray-700 font-bold mb-2 text-2xl'>
          Buscar {currentConfig.label}
        </label>
        <input
          type='text'
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={`Escribe el nombre del ${searchType === 'characters' ? 'personaje' : searchType === 'locations' ? 'lugar' : 'episodio'}...`}
          className='w-full px-4 py-3 text-2xl border-2 border-gray-300 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300'
        />
      </div>
    </div>
  )
}
