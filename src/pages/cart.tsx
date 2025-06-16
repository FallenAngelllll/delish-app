'use client'

import { useRouter } from 'next/router'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

import MainLayout from '@/components/layouts/MainLayout'
import { CartList } from '@/components/organisms/lists/cartList'
import OrderSummary from '@/components/organisms/orderSummary'

export default function CartPage() {
  const router = useRouter()

  return (
    <MainLayout
      backgroundFit='cover'
      containerClassName='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'
    >
      <div className='flex items-center gap-2'>
        <ArrowLongLeftIcon
          onClick={() => router.back()}
          aria-hidden='true'
          className='h-6 w-6 text-gray-800 lg:hidden'
        />
        <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>Ваша корзина</h1>
      </div>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div className='w-full lg:w-3/4'>
          <CartList />
        </div>
        <OrderSummary totalPrice='1 290 ₽' totalItems='4' />
      </div>
    </MainLayout>
  )
}
