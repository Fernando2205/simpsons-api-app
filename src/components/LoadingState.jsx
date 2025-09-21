import { Loader } from '../icons'
import { SEARCH_TYPES } from '../constants'

export default function LoadingState ({ searchType }) {
  const currentConfig = SEARCH_TYPES[searchType]

  return (
    <div className='flex justify-center items-center py-12'>
      <div className='bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-300'>
        <div className='flex flex-col items-center'>
          <Loader />
          <p className='text-gray-700 mt-4 font-bold text-2xl'>
            Cargando {currentConfig.label.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  )
}
