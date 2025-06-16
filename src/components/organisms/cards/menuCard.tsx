import { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

import { Basket } from '@/components/atoms/icons/basket'

export interface Menu {
  name: string
  price: string
  description: string
  image: string
}

export const menu: Menu[] = [
  {
    name: 'Сырный суп с шампиньонами',
    price: '600 ₽',
    description:
      'Насыщенный сырно-сливочный вкус и аппетитный грибной аромат с нотками свежего укропа.',
    image: '/images/cheese.jpg',
  },
  {
    name: 'Солянка сборная с колбасой',
    price: '450 ₽',
    description: 'Мясная сборная солянка - это вкусное, сытное, ароматное блюдо.',
    image: '/images/solyanka.jpg',
  },
  {
    name: 'Суп "Затируха" с курицей',
    price: '300 ₽',
    description: 'Затируха - старинный крестьянский суп.',
    image: '/images/zatiruha.jpg',
  },
  {
    name: '"Жареный" суп со сметаной',
    price: '350 ₽',
    description: 'Сметанная заправка придаёт супу нежную текстуру и сливочный вкус.',
    image: '/images/jarinij.jpg',
  },
  {
    name: 'Шурпа из говядины',
    price: '500 ₽',
    description:
      'Сытный, что многие после того, как отведали его, отказываются переходить ко второму.',
    image: '/images/shurpa.jpg',
  },
  {
    name: 'Суп мампар',
    price: '400 ₽',
    description: 'Среднеазиатский густой суп, родственник лагмана.',
    image: '/images/mampar.jpg',
  },
  {
    name: 'Куриный суп с клёцками',
    price: '250 ₽',
    description: 'Это прекрасное первое блюдо в любое время года!',
    image: '/images/chiken.jpg',
  },
  {
    name: 'Лагман с говядиной',
    price: '500 ₽',
    description: 'Аппетитный лагман с говядиной и овощами получается очень вкусным, наваристым.',
    image: '/images/lagman.jpg',
  },
  {
    name: 'Медовик по-старославянски',
    price: '300 ₽',
    description: 'Многослойный медовый торт с нежным кремом.',
    image: '/images/honey.jpg',
  },
  {
    name: 'Жаркое из телятины',
    price: '550 ₽',
    description:
      'Жаркое из телятины, приготовленное в горшочке с картофелем, морковью и луком в сливочном соусе.',
    image: '/images/slavicFeast.png',
  },
  {
    name: 'Уха по-царски',
    price: '320 ₽',
    description:
      'Богатый рыбный суп на основе сёмги и судака с добавлением ароматных специй и корней.',
    image: '/images/birchbarkYard.jpg',
  },
  {
    name: 'Чай травяной "Сила земли"',
    price: '120 ₽ за 0.3 л',
    description: 'Сбор целебных трав, дарующих бодрость и здоровье.',
    image: '/images/teaHouse.png',
  },
  {
    name: 'Булочка "Улитка" с маком',
    price: '245 ₽',
    description: 'Немецкая булочка с маком и малиновой помадкой.',
    image: '/images/radmila.jpg',
  },
]

export const MenuCard: React.FC<Menu> = ({ name, price, description, image }) => {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-full flex-col gap-2 rounded-md bg-white px-4 pb-3 pt-2 shadow-md lg:px-4 lg:pb-4 lg:pt-3'>
      <img src={image} alt={name} className='h-32 w-full rounded-xl object-cover' />
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
          <Basket className='h-6 w-6 text-white' />
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
