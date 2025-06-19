'use client'

import React, { Fragment, useEffect, useMemo, useState } from 'react'
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

    if (kitchenFilter)
      list = list.filter(r => r.kitchenType.toLowerCase().includes(kitchenFilter.toLowerCase()))
    if (ratingFilter) list = list.filter(r => r.rating === Number(ratingFilter[0]))
    if (timeFilter)
      list = list.filter(r => {
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
    if (kitchenFilter)
      list = list.filter(r => r.kitchenType.toLowerCase().includes(kitchenFilter.toLowerCase()))
    if (ratingFilter) list = list.filter(r => r.rating === Number(ratingFilter[0]))
    if (timeFilter)
      list = list.filter(r => {
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

  const mobileList = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const all = filteredByFilters
  const favorites = all.filter(r => r.favorite)
  const recent = all.filter(r => r.recent)

  return (
    <MainLayout
      backgroundFit='cover'
      containerClassName='mx-auto flex w-full max-w-screen-xl flex-col gap-7 px-5 py-5 lg:px-12 lg:py-8 2xl:max-w-screen-2xl'
    >
      <Heading className='lg:text-center'>Все рестораны</Heading>

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
          <div className='flex flex-col gap-4 lg:hidden'>
            {filtered.length > 0 ? (
              <>
                <RestaurantList list={mobileList} />
                {hasMore && (
                  <button
                    type='button'
                    onClick={() => setVisibleCount(prev => prev + INCREMENT)}
                    className='rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-800'
                  >
                    Показать ещё
                  </button>
                )}
              </>
            ) : (
              <p className='text-center text-gray-500'>Ничего не найдено</p>
            )}
          </div>

          <div className='hidden flex-col gap-7 lg:flex'>
            <div>
              {all.length > 0 ? (
                <RestaurantList list={all} />
              ) : (
                <p className='text-gray-500'>Ничего не найдено</p>
              )}
            </div>

            <div className='flex flex-col gap-7'>
              <Heading level={2}>Избранные рестораны</Heading>
              {favorites.length > 0 ? (
                <RestaurantList list={favorites} />
              ) : (
                <p className='text-gray-500'>Ничего не найдено</p>
              )}
            </div>

            <div className='flex flex-col gap-7'>
              <Heading level={2}>Недавно заказывали</Heading>
              {recent.length > 0 ? (
                <RestaurantList list={recent} />
              ) : (
                <p className='text-gray-500'>Ничего не найдено</p>
              )}
            </div>
          </div>
        </Fragment>
      ) : (
        'Загрузка ресторанов...'
      )}
    </MainLayout>
  )
}
