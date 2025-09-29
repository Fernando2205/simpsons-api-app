// src/hooks/useSimpsonsData.js
import { useState, useEffect, useRef } from 'react'
import { fetchData } from '../api/simpson'
import { SEARCH_TYPES, API_PAGE_SIZE } from '../constants'

export function useSimpsonsData (searchType, page, itemsPerPage = API_PAGE_SIZE) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const cacheRef = useRef({})
  // Reset cuando cambia el tipo de búsqueda
  useEffect(() => {
    setItems([])
    setError('')
    cacheRef.current = {}
  }, [searchType])

  // Fetch data cuando cambia página o tipo
  useEffect(() => {
    const controller = new AbortController()

    const fetchDataAsync = async () => {
      try {
        setLoading(true)
        setError('')

        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        const startApiPage = Math.floor(startIndex / API_PAGE_SIZE) + 1
        const endApiPage = Math.floor((endIndex - 1) / API_PAGE_SIZE) + 1

        console.log(`-------- DEBUG Página ${page}, Items ${itemsPerPage} --------`)
        console.log(`- Necesito items desde indice ${startIndex} hasta ${endIndex - 1}`)
        console.log(`- Paginas de la API necesarias: ${startApiPage} a ${endApiPage}`)
        const allItems = []
        const pagesNeeded = []

        // Verificar a que paginas necesitamos hacerle fetch
        for (let p = startApiPage; p <= endApiPage; p++) {
          if (cacheRef.current[p]) {
            console.log(`- Página ${p} de la API: En cache (${cacheRef.current[p].length} items)`)
          } else {
            console.log(`- Página ${p} de la API no está cacheada. Relizando fetch...`)
            pagesNeeded.push(p)
          }
        }

        // Fetch a paginas que no están en cache
        for (const p of pagesNeeded) {
          const data = await fetchData(searchType, p, controller.signal)

          // Guardar en cache
          cacheRef.current[p] = data
          console.log(`.Página ${p} guardada en cache (${data.length} items)`)

          // Romper el ciclo si una pagina tenga menos de 20 items
          if (data.length < API_PAGE_SIZE) break
        }

        // Construir array final a partir del cache
        for (let p = startApiPage; p <= endApiPage; p++) {
          if (cacheRef.current[p]) {
            allItems.push(...cacheRef.current[p])
          }
        }

        const offsetInData = startIndex % API_PAGE_SIZE

        const slicedItems = allItems.slice(offsetInData, offsetInData + itemsPerPage)
        console.log(`- Total disponible: ${allItems.length} items`)
        console.log(`- Mostrando: ${slicedItems.length} items (offset ${offsetInData})`)
        console.log('- Cache actual:', Object.keys(cacheRef.current).map(k => `Página ${k}: ${cacheRef.current[k].length} items`))

        setItems(slicedItems)
      } catch (e) {
        if (controller.signal.aborted) {
          return
        }

        const message = e?.message || `Error durante la carga de ${SEARCH_TYPES[searchType].label.toLowerCase()}`
        const status = e?.status != null ? ` (status ${e.status})` : ''
        setError(message + status)

        if (process.env.NODE_ENV === 'development') {
          console.log('[HTTP Error]', e)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchDataAsync()

    return () => {
      controller.abort()
    }
  }, [searchType, page, itemsPerPage])

  return { items, loading, error }
}
