'use client'

import { JSX } from 'react'
import { useRouter } from 'next/router'

import Button from '@/components/atoms/buttons/primaryButton'
import { CardImage } from '@/components/atoms/CardImage/CardImage'
import { Icon } from '@/components/atoms/icons/icon'
import { InfoRow } from '@/components/atoms/RestaurantInfoRow'
import { StarRating } from '@/components/molecules/rating/starRating'
import { Restaurant } from '@/types/restaurants'

export const RestaurantCard: ({
  id,
  name,
  rating,
  description,
  kitchenType,
  time,
  price,
  image,
}: Restaurant) => JSX.Element = ({
  id,
  name,
  rating,
  description,
  kitchenType,
  time,
  price,
  image,
}) => {
  const router = useRouter()

  const goToMenu = (currentId: string) => {
    router.push({
      pathname: `/menu`,
      query: { name: encodeURIComponent(name) },
    })
  }

  return (
    <>
      <div className='flex flex-col gap-1 rounded-md bg-white px-4 pb-4 pt-2 shadow-md lg:hidden'>
        <h2 className='truncate text-center font-roboto text-base font-bold text-gray-800'>
          {name}
        </h2>
        <CardImage src={image} alt={name} className='h-32 rounded-xl' />
        <div className='flex items-center justify-between gap-2'>
          <StarRating rating={rating} size='sm' className='flex space-x-2' />
          <p className='truncate text-xs text-gray-600'>{kitchenType}</p>
        </div>
        <p className='line-clamp-2 flex-1 text-left text-xs text-gray-800'>{description}</p>
        <div className='mt-1 flex justify-between gap-4 text-xs text-gray-600'>
          <span className='flex items-center'>{time}</span>
          <span className='flex items-center'>
            <Icon name='DiscountIcon' aria-hidden='true' className='mr-1 h-4 w-4' />
            {price}
          </span>
        </div>
        <Button variant='card' fullWidth onClick={() => goToMenu(id)} className='mt-2 text-sm'>
          Смотреть меню
        </Button>
      </div>

      <div className='hidden min-w-[14rem] max-w-[20rem] flex-grow flex-col items-start gap-1.5 rounded-md bg-white px-4 pb-4 pt-1.5 text-left shadow-md lg:flex'>
        <h2 className='w-full truncate text-center font-roboto text-xl font-bold text-gray-800'>
          {name}
        </h2>
        <CardImage src={image} alt={name} className='h-[7.5rem]' />
        <StarRating
          rating={rating}
          size='sm'
          className='mt-1 flex items-center'
          starsClassName='space-x-2'
        />
        <p className='line-clamp-2 w-full flex-[2] text-sm text-gray-800'>{description}</p>
        <InfoRow label='Тип кухни:' value={kitchenType} variant='grid' />
        <InfoRow label='Время доставки:' value={time} />
        <div className='flex w-full justify-between text-xs text-gray-600'>
          <span className='flex items-center'>
            <Icon name='DiscountIcon' aria-hidden='true' className='mr-1 h-4 w-4' />
            Средний чек:
          </span>
          <span>{price}</span>
        </div>
        <Button variant='card' fullWidth onClick={() => goToMenu(id)} className='mt-4 text-base'>
          Смотреть меню
        </Button>
      </div>
    </>
  )
}
