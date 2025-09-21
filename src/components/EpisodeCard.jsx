import { useState } from 'react'
import { getImageUrl } from '../api/simpson.js'

export default function EpisodeCard ({ episode }) {
  const src = episode?.image_path ? getImageUrl(episode.image_path) : ''
  const [imgOK, setImgOK] = useState(true)

  return (
    <li className='bg-white rounded-2xl p-6 border-2 border-yellow-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer'>
      {/* Imagen */}
      <div className='relative overflow-hidden rounded-xl mb-4'>
        {src && imgOK
          ? (
            <img
              src={src}
              alt={episode?.name ?? 'Episodio'}
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

      {/* Nombre */}
      <div className='space-y-4'>
        <h3 className='text-2xl font-black text-gray-800 leading-tight'>
          {episode?.name || 'Título desconocido'}
        </h3>

        {/* Temporada y número de episodio */}
        <div className='space-y-2'>
          <div className='flex gap-2 flex-wrap'>
            {episode?.season && (
              <div className='bg-blue-50 px-3 py-2 rounded-lg border border-blue-200'>
                <span className='text-blue-800 font-semibold text-lg'>
                  Season {episode.season}
                </span>
              </div>
            )}
            {episode?.episode_number && (
              <div className='bg-green-50 px-3 py-2 rounded-lg border border-green-200'>
                <span className='text-green-800 font-semibold text-lg'>
                  Episode {episode.episode_number}
                </span>
              </div>
            )}
          </div>

          {/* Fecha de emision */}
          {episode?.airdate && (
            <div className='bg-purple-50 px-3 py-2 rounded-lg border border-purple-200'>
              <span className='text-purple-800 font-semibold text-lg'>
                Airdate: {episode.airdate}
              </span>
            </div>
          )}

        </div>

        {/* Sinopsis */}
        {episode?.synopsis && (
          <div className='bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400'>
            <p className='text-lg text-yellow-800 leading-relaxed'>
              {episode.synopsis}
            </p>
          </div>)}
      </div>
    </li>
  )
}
