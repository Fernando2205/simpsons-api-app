import { useState } from 'react'
import { getImageUrl } from '../api/simpson.js'

export default function LocationCard ({ location }) {
  const src = location?.image_path ? getImageUrl(location.image_path) : ''
  const [imgOK, setImgOK] = useState(true)

  return (
    <li className='bg-white rounded-2xl p-6 border-2 border-yellow-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer'>
      {/* Imagen */}
      <div className='relative overflow-hidden rounded-xl mb-4'>
        {src && imgOK
          ? (
            <img
              src={src}
              alt={location?.name ?? 'Locación'}
              loading='lazy'
              className='w-full h-[200px] object-cover transition-transform duration-300 hover:scale-110'
              onError={() => setImgOK(false)}
            />
            )
          : (
            <div className='h-[200px] bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center rounded-xl border-2 border-yellow-300'>
              <div className='text-center text-yellow-700'>
                <div className='text-3xl font-bold mb-2'>Sin imagen</div>
                <div className='text-lg'>Imagen no disponible</div>
              </div>
            </div>
            )}
      </div>

      {/* Información */}
      <div className='space-y-4'>
        <h3 className='text-2xl font-black text-gray-800 leading-tight'>
          {location?.name || 'Nombre desconocido'}
        </h3>

        {/* Detalles */}
        <div className='space-y-2'>

          {location?.town && location.town.trim() && (
            <div className='bg-blue-50 px-3 py-2 rounded-lg border border-blue-200'>
              <span className='text-blue-800 font-semibold text-lg'>
                Town: {location.town}
              </span>
            </div>
          )}

          {location?.use && location.use.trim() && (
            <div className='bg-green-50 px-3 py-2 rounded-lg border border-green-200'>
              <span className='text-green-800 font-semibold text-lg'>
                Use: {location.use}
              </span>
            </div>
          )}

        </div>

        {/* Si no ninguna info de la locación */}
        {(!location?.town || !location.town.trim()) && (!location?.use || !location.use.trim()) && (
          <div className='bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400'>
            <p className='text-lg text-yellow-800 leading-relaxed'>
              There is no info about this location.
            </p>
          </div>
        )}
      </div>
    </li>
  )
}
