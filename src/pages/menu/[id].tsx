'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { getMenu } from '@/api/get-menu'
import { FiltersMenu } from '@/components/molecules/filters'
import PageTitleWithBack from '@/components/organisms/headers/pageTitleWithBack'
import { MenuList } from '@/components/organisms/lists/menuList'
import { Heading } from '@/components/atoms/Heading'
import MainLayout from '@/components/layouts/MainLayout'

export default function MenuPage() {
  const [menu, setMenu] = useState<Record<string, MenuItem[]>>({})
  const [filterGroup, setFilterGroup] = useState<string | null>(null)

  const router = useRouter()
  const { id, name } = router.query
  const decodedName = name ? decodeURIComponent(name as string) : ''

  const { data, isLoading, isError } = useQuery({
    queryKey: ['menu', id],
    queryFn: () => getMenu(id as string),
    enabled: Boolean(id),
  })

  useEffect(() => {
    if (data) {
      const grouped = data.reduce((acc, item) => {
        (acc[item.group] = acc[item.group] || []).push(item)
        return acc
      }, {} as Record<string, MenuItem[]>)
      setMenu(grouped)
    }
  }, [data])

  return (
    <MainLayout backgroundFit='contain'>
        <PageTitleWithBack title={decodedName} />
        {!isLoading && !isError && menu ? (
          <Fragment>
            <FiltersMenu menu={menu} setFilterGroup={setFilterGroup} />
            {!filterGroup ? (
              <Fragment>
                {Object.keys(menu).map(groupName => (
                  <section className='flex flex-col gap-6'>
                    <Heading level = '2'>{groupName}</Heading>
                    <MenuList list={menu[groupName]} />
                  </section>
                ))}
              </Fragment>
            ) : (
              <section className='flex flex-col gap-6'>
                <Heading level = '2'>{filterGroup}</Heading>
                <MenuList list={menu[filterGroup]} />
              </section>
            )}
          </Fragment>
        ) : (
          'Загрузка меню...'
        )}
</MainLayout>
  )
}
