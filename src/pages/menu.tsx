import React from 'react'

import { MenuList } from '@/components/organisms/lists/menuList'
import { FiltersMenu } from '@/components/molecules/filters'
import Header from '@/components/organisms/headers/header'
import HeaderMobile from '@/components/organisms/headers/headerMobile'
import PageTitleWithBack from '@/components/organisms/headers/pageTitleWithBack'

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
        <PageTitleWithBack title='Трапеза Ярополка' />
        <FiltersMenu />
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800'>Супы</h2>
          <MenuList />
        </section>
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800 lg:pt-6'>Основные блюда</h2>
          <MenuList />
        </section>
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800 lg:pt-6'>Десерты</h2>
          <MenuList />
        </section>
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800 lg:pt-6'>Напитки</h2>
          <MenuList />
        </section>
      </div>
    </div>
  )
}
