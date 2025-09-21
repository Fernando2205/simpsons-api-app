import { useState, useMemo, useEffect } from 'react'
import { SEARCH_TYPES } from '../constants'

export function useSearch (items, searchType) {
  const [query, setQuery] = useState('')

  // Reset query cuando cambia el tipo
  useEffect(() => {
    setQuery('')
  }, [searchType])

  const filtered = useMemo(() => {
    const key = query.trim().toLowerCase()
    const searchField = SEARCH_TYPES[searchType]?.searchField
    return key
      ? items.filter(item => item[searchField]?.toLowerCase().includes(key))
      : items
  }, [query, items, searchType])

  return { query, setQuery, filtered }
}
