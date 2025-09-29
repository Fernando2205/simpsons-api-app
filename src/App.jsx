import { useState } from 'react'
import { useSimpsonsData } from './hooks/useSimpsonsData'
import { usePagination } from './hooks/usePagination'
import { useSearch } from './hooks/useSearch'
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
  const [itemsPerPage, setItemsPerPage] = useState(20)

  // Custom hooks
  const pagination = usePagination()
  const { items, loading, error } = useSimpsonsData(searchType, pagination.page, itemsPerPage)
  const { query, setQuery, filtered } = useSearch(items, searchType)
  const { show: showScrollTop, scrollToTop } = useScrollTop(400)

  // Reset pagination cuando cambia el tipo
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value)
    pagination.resetPage()
  }

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage)
    pagination.resetPage()
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50'>

      <main className='max-w-6xl mx-auto px-6 py-8'>
        <SearchControls
          searchType={searchType}
          onSearchTypeChange={handleSearchTypeChange}
          query={query}
          onQueryChange={setQuery}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
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
