'use client'

import React from 'react'

import MainLayout from '@/components/layouts/MainLayout'
import { OrderCard } from '@/components/organisms/cards/orderCard'
import PageTitleWithBack from '@/components/organisms/headers/pageTitleWithBack'

export default function OrderHistoryPage() {
  return (
    <MainLayout backgroundFit='cover'>
      <PageTitleWithBack title='Все заказы' />
      <div className='flex flex-col gap-1'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </MainLayout>
  )
}
