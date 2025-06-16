import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { LogoPC } from '@/components/atoms/icons/logoPC'
import { User } from '@/components/atoms/icons/user'
import Search from '@/components/molecules/search'

export default function HeaderLog() {
  return (
    <header className='hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:border-b lg:border-gray-300 lg:bg-white lg:px-6 lg:py-3.5'>
      <LogoPC aria-hidden='true' />
      <Search />
      <div className='flex items-center gap-6'>
        <Link href='/login' className='group flex flex-col items-center gap-1'>
          <User
            aria-hidden='true'
            className='h-6 w-6 stroke-current text-gray-800 group-hover:text-blue-600 group-active:text-blue-700'
          />
          <span className='text-xs text-gray-800 group-hover:text-blue-600 group-active:text-blue-700'>
            Войти
          </span>
        </Link>
        <Link href='/registration'>
          <button
            type='button'
            className='rounded-lg bg-blue-500 px-4 py-2 text-base font-bold text-white transition hover:bg-blue-600 active:bg-blue-700'
          >
            Зарегистрироваться
          </button>
        </Link>
      </div>
    </header>
  )
}
