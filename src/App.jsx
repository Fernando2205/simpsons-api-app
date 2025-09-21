import { useState, useEffect } from 'react'
import { useSimpsonsData } from './hooks/useSimpsonsData'
import { usePagination } from './hooks/usePagination'
import { useSearch } from './hooks/useSearch'
import { SEARCH_TYPES } from './constants'
import useScrollTop from './hooks/useScrollTop'
import SearchControls from './components/SearchControls'
import NavigationControls from './components/NavigationControls'
import LoadingState from './components/LoadingState'
import ErrorState from './components/ErrorState'
import EmptyState from './components/EmptyState'
import ResultsGrid from './components/ResultsGrid'
import ScrollToTopButton from './components/ScrollToTopButton'

function App () {
  const [searchType, setSearchType] = useState('characters')

  // Custom hooks
  const pagination = usePagination()
  const { items, loading, error } = useSimpsonsData(searchType, pagination.page)
  const { query, setQuery, filtered } = useSearch(items, searchType)
  const { show: showScrollTop, scrollToTop } = useScrollTop(400)

  // Reset pagination cuando cambia el tipo
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value)
    pagination.resetPage()
  }

  useEffect(() => {
    console.log(Object.entries(SEARCH_TYPES))
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50'>

      <main className='max-w-6xl mx-auto px-6 py-8'>
        <SearchControls
          searchType={searchType}
          onSearchTypeChange={handleSearchTypeChange}
          query={query}
          onQueryChange={setQuery}
        />

        <NavigationControls
          {...pagination}
          loading={loading}
        />

        {error && <ErrorState error={error} />}

        {loading && <LoadingState searchType={searchType} />}

        {!loading && !error && filtered.length === 0 && (
          <EmptyState searchType={searchType} query={query} />
        )}

        {!loading && filtered.length > 0 && (
          <ResultsGrid
            items={filtered}
            searchType={searchType}
            query={query}
          />
        )}
      </main>

      <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />
    </div>
  )
}

export default App
