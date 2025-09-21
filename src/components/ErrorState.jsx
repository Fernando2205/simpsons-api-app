export default function ErrorState ({ error }) {
  return (
    <div className='bg-red-100 border-l-4 border-red-500 p-4 mb-6 rounded-r-xl'>
      <div className='flex items-center'>
        <div className='ml-3'>
          <p className='text-red-700 font-bold'>Error al cargar los datos</p>
          <p className='text-red-600'>{error}</p>
        </div>
      </div>
    </div>
  )
}
