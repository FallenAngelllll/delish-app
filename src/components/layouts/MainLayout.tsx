'use client'

import React from 'react'
import Image from 'next/image'

import Header from '@/components/organisms/headers/header'
import HeaderMobile from '@/components/organisms/headers/headerMobile'

interface MainLayoutProps {
  children: React.ReactNode
  backgroundFit?: 'contain' | 'cover'
  containerClassName?: string
}

const MainLayout = ({
  children,
  backgroundFit = 'contain',
  containerClassName = 'mx-auto flex w-full max-w-screen-xl flex-col gap-7 px-5 py-5 lg:items-center lg:px-12 lg:py-8 2xl:max-w-screen-2xl',
}: MainLayoutProps) => {
  return (
    <div className='scrollbar-hidden relative min-h-screen overflow-y-auto lg:bg-gray-100 lg:bg-none'>
      <div className='absolute inset-0 z-0 block lg:hidden'>
        <Image
          src='/images/bgImageM.jpg'
          alt='Mobile background'
          fill
          priority
          style={{
            objectFit: backgroundFit,
            objectPosition: 'top center',
          }}
        />
      </div>

      <div className='relative z-10'>
        <HeaderMobile />
        <Header />
        <div className={containerClassName}>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
