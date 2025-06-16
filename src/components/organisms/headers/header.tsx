import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Basket } from '@/components/atoms/icons/basket'
import { Car } from '@/components/atoms/icons/car'
import { Chat } from '@/components/atoms/icons/chat'
import { LogoPC } from '@/components/atoms/icons/logoPC'
import { Storage } from '@/components/atoms/icons/storage'

export default function Header() {
  const router = useRouter()
  const isProfileActive = router.pathname === '/profile'

  return (
    <header className='hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:border-b lg:border-gray-300 lg:bg-white lg:px-6 lg:py-4'>
      <Link href='/' aria-label='Перейти на главную страницу'>
        <LogoPC aria-hidden='true' />
      </Link>
      <nav role='navigation' aria-label='Навигация' className='ml-auto flex items-center gap-6'>
        <a
          href='#'
          className='group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700'
        >
          <div className='relative'>
            <Chat aria-hidden='true' className='h-5 w-5' />
            <span className='absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100'></span>
          </div>
          Чат поддержки
        </a>
        <Link
          href='/orderInfo'
          className='group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700'
        >
          <div className='relative'>
            <Car aria-hidden='true' className='h-5 w-5' />
            <span className='absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100'></span>
          </div>
          Отслеживание заказа
        </Link>
        <Link
          href='/orderHistory'
          className='group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700'
        >
          <div className='relative'>
            <Storage aria-hidden='true' className='h-5 w-5' />
            <span className='absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100'></span>
          </div>
          Ваши заказы
        </Link>
        <Link
          href='/cart'
          className='group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700'
        >
          <div className='relative'>
            <Basket aria-hidden='true' className='h-5 w-5' />
            <span className='absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100'></span>
          </div>
          Корзина
        </Link>
      </nav>
      <Link
        href='/profile'
        className={`ml-6 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border ${
          isProfileActive
            ? 'border-2 border-blue-700'
            : 'hover:border-blue-600 active:border-2 active:border-blue-700'
        }`}
      >
        <Image
          src='/images/avatar.svg'
          alt='Аватар пользователя'
          width={40}
          height={40}
          className='rounded-full'
        />
      </Link>
    </header>
  )
}
