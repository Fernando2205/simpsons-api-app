import axios from 'axios'
import { SEARCH_TYPES } from '../constants'

// Instancia simple de axios con la URL base de la API
const api = axios.create({
  baseURL: 'https://thesimpsonsapi.com/api'
})

/**
 * Obtiene una lista de personajes de Los Simpsons
 * @param {number} page - Número de página (por defecto 1)
 * @param {AbortSignal} signal - Señal para cancelar la petición HTTP
 * @returns {Array} Array con la lista de personajes
 */
export async function fetchData (type, page = 1, signal) {
  const config = SEARCH_TYPES[type]
  if (!config) throw new Error(`Tipo de búsqueda inválido: ${type}`)

  const res = await api.get(config.endpoint, {
    params: { page },
    signal
  })
  return res.data?.results || []
}

/**
 * Construye la URL completa de una imagen desde el CDN
 * @param {string} path - Ruta de la imagen (ej: "/character/1.webp")
 * @returns {string} URL completa de la imagen o cadena vacía si no hay path
 */
export function getImageUrl (path) {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `https://cdn.thesimpsonsapi.com/500${path}`
}
