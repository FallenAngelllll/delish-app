import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <div
      role='search'
      className='group relative flex min-w-[200px] max-w-lg flex-1 rounded-lg border-2 border-blue-500 focus-within:border-blue-700'
    >
      <input
        type='text'
        id='search'
        placeholder='Искать'
        className='w-full rounded-lg bg-white py-2 pl-4 pr-14 text-gray-800 placeholder-gray-400 focus:outline-none'
      />
      <button
        type='button'
        aria-label='Начать поиск'
        className='absolute right-0 top-0 flex h-full items-center justify-center rounded-r-sm bg-blue-500 px-5 transition hover:bg-blue-600 group-focus-within:bg-blue-700'
      >
        <MagnifyingGlassIcon aria-hidden='true' className='h-6 w-6 text-white' />
      </button>
    </div>
  )
}
