import { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

import { CardImage } from '@/components/atoms/CardImage/CardImage'
import { Icon } from '@/components/atoms/icons/icon'

export interface Menu {
  name: string
  price: string
  description: string
  image: string
}

export const MenuCard: React.FC<Menu> = ({ name, price, description, image }) => {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-full flex-col gap-2 rounded-md bg-white px-4 pb-3 pt-2 shadow-md lg:px-4 lg:pb-4 lg:pt-3'>
      <CardImage
        src={image}
        alt={name}
        sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
        className='h-32 rounded-xl'
      />
      <div className='flex items-center gap-1'>
        <span className='flex items-center truncate font-roboto text-xl font-bold text-green-700 lg:hidden'>
          {price}
        </span>
        <h3 className='truncate text-left text-xs text-gray-800 lg:text-sm'>{name}</h3>
      </div>
      <p className='line-clamp-3 flex-1 text-left text-xs text-gray-600'>{description}</p>
      <span className='hidden font-roboto text-xl font-bold text-green-700 lg:block'>{price}</span>
      {count === 0 ? (
        <button
          type='button'
          aria-label='Добавить в корзину'
          className='mt-auto flex w-full items-center justify-center rounded-md bg-blue-600 py-2 hover:bg-blue-700 active:bg-blue-800'
          onClick={() => setCount(1)}
        >
          <Icon name='Basket' aria-hidden='true' className='text-white' />
        </button>
      ) : (
        <div className='mt-auto flex w-full items-center gap-1'>
          <button
            type='button'
            aria-label='Убрать'
            className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            onClick={() => setCount(prev => Math.max(0, prev - 1))}
          >
            <MinusIcon className='h-5 w-5 text-white' />
          </button>

          <div className='flex h-10 flex-1 items-center justify-center rounded-md border border-gray-300 bg-white text-base font-bold text-gray-800'>
            {count}
          </div>

          <button
            type='button'
            aria-label='Добавить'
            className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            onClick={() => setCount(prev => prev + 1)}
          >
            <PlusIcon className='h-5 w-5 text-white' />
          </button>
        </div>
      )}
    </div>
  )
}
