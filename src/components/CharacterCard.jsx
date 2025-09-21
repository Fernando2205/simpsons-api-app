import { useState } from 'react'
import { getImageUrl } from '../api/simpson'

export default function CharacterCard ({ c }) {
  const src = c?.portrait_path ? getImageUrl(c.portrait_path) : ''
  const [imgOK, setImgOK] = useState(true)

  return (
    <li className='bg-white rounded-2xl p-5 border-2 border-yellow-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer'>
      {/* Imagen */}
      <div className='relative overflow-hidden rounded-xl mb-4'>
        {src && imgOK
          ? (
            <img
              src={src}
              alt={c?.name ?? 'Personaje'}
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
      <div className='space-y-3'>
        <h3 className='text-2xl font-black text-gray-800 leading-tight'>{c?.name}</h3>

        <div className='bg-blue-50 px-3 py-2 rounded-lg border border-blue-200'>
          <span className='text-blue-800 font-semibold text-lg'>
            {c?.occupation || 'Ocupación desconocida'}
          </span>
        </div>

        <div className='flex items-center gap-3'>

          {c?.status && (
            <div className='flex items-center gap-2'>
              <span className={`w-3 h-3 rounded-full ${c.status === 'Alive' ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className='text-lg font-bold text-gray-600'>{c.status}</span>
            </div>
          )}

          {c?.age && (
            <div className='text-lg text-gray-600'>
              {c.age} years old
            </div>
          )}
        </div>

        {Array.isArray(c?.phrases) && c.phrases[0] && (
          <div className='bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400'>
            <p className='text-lg text-yellow-800 italic font-medium leading-relaxed'>
              "{c.phrases[0]}"
            </p>
          </div>
        )}
      </div>
    </li>
  )
}
