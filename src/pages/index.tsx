'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getRestaurantList } from '@/api/get-restaurant-list'
import { Heading } from '@/components/atoms/Heading'
import MainLayout from '@/components/layouts/MainLayout'
import { RestaurantList } from '@/components/organisms/lists/restaurantList'
import { Filters } from '@/components/molecules/filters'
import Tabs from '@/components/molecules/tabs'
import { Restaurant } from '@/types/restaurants'

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [restaurantList, setRestaurantList] = useState<Restaurant | null>(null)
  const [recent, setRecent] = useState<Restaurant | null>(null)
  const [favorite, setFavorite] = useState<Restaurant | null>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['key'],
    queryFn: () => getRestaurantList(),
  })

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setRestaurantList(data)
      const recents = []
      const favorites = []
      data.forEach(item => {
        if (item.recent) {
          recents.push(item)
        }
        if (item.favorite) {
          favorites.push(item)
        }
      })
      recents.length && setRecent(recents as Restaurant)
      favorites.length && setFavorite(favorites as Restaurant)
    }
  }, [data])

  return (
    <MainLayout backgroundFit='cover'>
      <Heading>Все рестораны</Heading>
      <div className='lg:hidden'>
        <Tabs activeTab={activeTab} onChangeTab={handleChangeTab} />
      </div>
      <Filters />
      {!isLoading && !isError && restaurantList ? (
        <Fragment>
          <RestaurantList list={restaurantList} />
          {recent && (
            <Fragment>
              <Heading level={2} className='hidden self-start text-left lg:block lg:pt-6'>
                Недавно заказывали
              </Heading>
              <RestaurantList list={recent} />
            </Fragment>
          )}
          {favorite && (
            <Fragment>
              <Heading level={2} className='hidden self-start text-left lg:block lg:pt-6'>
                Избранные рестораны
              </Heading>
              <RestaurantList list={favorite} />
            </Fragment>
          )}
        </Fragment>
      ) : (
        'Загрузка ресторанов...'
      )}
    </MainLayout>
  )
}
