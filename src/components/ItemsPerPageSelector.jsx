import { ITEMS_OPTIONS } from '../constants'

export default function ItemsPerPageSelector ({ itemsPerPage, onItemsPerPageChange }) {
  return (
    <div>
      <label className='block text-gray-700 font-bold mb-2 text-xl'>
        Items por página
      </label>
      <select
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        className='w-full px-4 py-3 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white font-bold'
      >
        {ITEMS_OPTIONS.map(count => (
          <option key={count} value={count}>
            {count} items
          </option>
        ))}
      </select>
    </div>
  )
}
