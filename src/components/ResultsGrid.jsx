import { SEARCH_TYPES } from '../constants'
import CharacterCard from './CharacterCard'
import LocationCard from './LocationCard'
import EpisodeCard from './EpisodeCard'

export default function ResultsGrid ({ items, searchType, query }) {
  const currentConfig = SEARCH_TYPES[searchType]

  const renderCard = (item) => {
    switch (searchType) {
      case 'characters':
        return <CharacterCard key={item.id} c={item} />
      case 'locations':
        return <LocationCard key={item.id} location={item} />
      case 'episodes':
        return <EpisodeCard key={item.id} episode={item} />
      default:
        return null
    }
  }

  return (
    <>
      {/* Contador de resultados */}
      <div className='text-center mb-6'>
        <div className='bg-yellow-100 inline-block px-6 py-2 rounded-full border-2 border-yellow-300'>
          <p className='text-gray-800 font-bold text-xl'>
            {items.length} {currentConfig.label.toLowerCase()}{items.length !== 1 ? '' : ''} encontrado{items.length !== 1 ? 's' : ''}
            {query && ` para "${query}"`}
          </p>
        </div>
      </div>

      {/* Grid de resultados */}
      <ul className='grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 justify-center'>
        {items.map(renderCard)}
      </ul>
    </>
  )
}
