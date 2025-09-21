import { ArrowUp } from '../icons'

export default function ScrollToTopButton ({ show, onClick }) {
  if (!show) return null

  return (
    <button
      onClick={onClick}
      className='fixed bottom-8 right-6 bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full shadow-lg border-2 border-yellow-600 transition-all duration-300 hover:scale-110 z-50 hover:cursor-pointer'
      aria-label='Volver arriba'
    >
      <ArrowUp />
    </button>
  )
}
