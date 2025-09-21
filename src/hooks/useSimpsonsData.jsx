// src/hooks/useSimpsonsData.js
import { useState, useEffect } from 'react'
import { fetchData } from '../api/simpson'
import { SEARCH_TYPES } from '../constants'

export function useSimpsonsData (searchType, page) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Reset cuando cambia el tipo de búsqueda
  useEffect(() => {
    setItems([])
    setError('')
  }, [searchType])

  // Fetch data cuando cambia página o tipo
  useEffect(() => {
    const controller = new AbortController()

    const fetchDataAsync = async () => {
      try {
        setLoading(true)
        setError('')
        const data = await fetchData(searchType, page, controller.signal)

        if (process.env.NODE_ENV === 'development' && data?.length > 0) {
          console.log('DEBUG', data[0])
        }

        setItems(data)
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
  }, [searchType, page])

  return { items, loading, error }
}
