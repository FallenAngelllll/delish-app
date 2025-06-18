'use client'

import MainLayout from '@/components/layouts/MainLayout'
import PageTitleWithBack from '@/components/organisms/headers/pageTitleWithBack'
import { CartList } from '@/components/organisms/lists/cartList'
import OrderSummary from '@/components/organisms/orderSummary'

export default function CartPage() {
  return (
    <MainLayout
      backgroundFit='cover'
      containerClassName='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'
    >
      <PageTitleWithBack title='Ваша корзина' />
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div className='w-full lg:w-3/4'>
          <CartList />
        </div>
        <OrderSummary totalPrice='1 290 ₽' totalItems='4' />
      </div>
    </MainLayout>
  )
}
