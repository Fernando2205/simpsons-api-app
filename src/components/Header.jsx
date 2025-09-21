export default function Header () {
  return (
    <header className='bg-gradient-to-r from-yellow-400 to-yellow-500 border-b-4 border-yellow-600 shadow-lg'>
      <div className='max-w-6xl mx-auto px-6 py-8 text-center'>
        <h1 className='text-4xl md:text-5xl font-black text-white drop-shadow-lg mb-2'>
          THE SIMPSONS API
        </h1>
        <p className='text-yellow-100 text-lg font-semibold'>
          Explora el universo de Los Simpsons
        </p>
      </div>
    </header>
  )
}
