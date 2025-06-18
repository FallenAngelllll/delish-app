'use client'

import React, { Fragment, useEffect, useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getRestaurantList } from '@/api/get-restaurant-list'
import { Heading } from '@/components/atoms/Heading'
import MainLayout from '@/components/layouts/MainLayout'
import { Filters } from '@/components/molecules/filters'
import Tabs from '@/components/molecules/tabs'
import { RestaurantList } from '@/components/organisms/lists/restaurantList'
import { Restaurant } from '@/types/restaurants'

function parseRange(time: string): [number, number] | null {
  const match = time.match(/(\d+)\D+(\d+)/)
  return match ? [parseInt(match[1], 10), parseInt(match[2], 10)] : null
}

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  // Для кнопки «Показать ещё»
  const INITIAL_COUNT = 6
  const INCREMENT = 6
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const [kitchenFilter, setKitchenFilter] = useState<string | null>(null)
  const [ratingFilter, setRatingFilter] = useState<string | null>(null)
  const [timeFilter, setTimeFilter] = useState<string | null>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['restaurants'],
    queryFn: getRestaurantList,
  })

  useEffect(() => {
    if (data && !isError) {
      setRestaurants(data)
      setVisibleCount(INITIAL_COUNT)
    }
  }, [data, isError])

  const filtered = useMemo(() => {
    let list = [...restaurants]
    if (activeTab === 'favorites') list = list.filter(r => r.favorite)
    else if (activeTab === 'recent') list = list.filter(r => r.recent)

    if (kitchenFilter) list = list.filter(r =>
      r.kitchenType.toLowerCase().includes(kitchenFilter.toLowerCase())
    )
    if (ratingFilter) list = list.filter(r =>
      r.rating === Number(ratingFilter[0])
    )
    if (timeFilter) list = list.filter(r => {
      const range = parseRange(r.time)
      if (!range) return false
      const [min, max] = range
      if (timeFilter === 'До 30 минут') return max <= 30
      const filterRange = parseRange(timeFilter)
      if (!filterRange) return false
      const [low, high] = filterRange
      return min >= low && max <= high
    })
    return list
  }, [restaurants, activeTab, kitchenFilter, ratingFilter, timeFilter])


  const filteredByFilters = useMemo(() => {
    let list = [...restaurants]
    if (kitchenFilter) list = list.filter(r =>
      r.kitchenType.toLowerCase().includes(kitchenFilter.toLowerCase())
    )
    if (ratingFilter) list = list.filter(r =>
      r.rating === Number(ratingFilter[0])
    )
    if (timeFilter) list = list.filter(r => {
      const range = parseRange(r.time)
      if (!range) return false
      const [min, max] = range
      if (timeFilter === 'До 30 минут') return max <= 30
      const filterRange = parseRange(timeFilter)
      if (!filterRange) return false
      const [low, high] = filterRange
      return min >= low && max <= high
    })
    return list
  }, [restaurants, kitchenFilter, ratingFilter, timeFilter])

  const anyFilter = Boolean(kitchenFilter || ratingFilter || timeFilter)

  const mobileList = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <MainLayout backgroundFit='cover' containerClassName='mx-auto flex w-full max-w-screen-xl flex-col gap-7 px-5 py-5 lg:px-12 lg:py-8 2xl:max-w-screen-2xl'>
      <Heading className='text-center'>Все рестораны</Heading>

      <div className='lg:hidden'>
        <Tabs activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>

      <Filters
        kitchenFilter={kitchenFilter}
        onChangeKitchen={setKitchenFilter}
        ratingFilter={ratingFilter}
        onChangeRating={setRatingFilter}
        timeFilter={timeFilter}
        onChangeTime={setTimeFilter}
      />

      {!isLoading && !isError ? (
        <Fragment>
          <div className='lg:hidden flex flex-col gap-4'>
            <RestaurantList list={mobileList} />
            {hasMore && (
              <button
                type='button'
                onClick={() => setVisibleCount(prev => prev + INCREMENT)}
                className='px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
              >
                Показать ещё
              </button>
            )}
          </div>
          
          <div className="hidden lg:flex flex-col gap-7">
            <RestaurantList list={filteredByFilters} />
            <Heading level={2}>Избранные рестораны</Heading>
            <RestaurantList list={filteredByFilters.filter(r => r.favorite)} />
            <Heading level={2}>Недавно заказывали</Heading>
            <RestaurantList list={filteredByFilters.filter(r => r.recent)} />
          </div>
        </Fragment>
      ) : (
        'Загрузка ресторанов...'
      )}
    </MainLayout>
  )
}