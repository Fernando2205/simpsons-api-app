import { useState } from 'react'

export function usePagination () {
  const [page, setPage] = useState(1)
  const [pageInput, setPageInput] = useState('')

  const handlePageInputSubmit = (e) => {
    e.preventDefault()
    const newPage = parseInt(pageInput)
    if (newPage && newPage >= 1) {
      setPage(newPage)
      setPageInput('')
    }
  }

  const goToNextPage = () => {
    setPage(p => p + 1)
  }

  const goToPreviousPage = () => {
    setPage(p => Math.max(1, p - 1))
  }

  const resetPage = () => {
    setPage(1)
    setPageInput('')
  }

  return {
    page,
    pageInput,
    setPageInput,
    handlePageInputSubmit,
    goToNextPage,
    goToPreviousPage,
    resetPage
  }
}
