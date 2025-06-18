'use client'

import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { cn } from '@/utils/cn'

const kitchenTypes = [
  'Славянская',
  'Европейская',
  'Русская',
  'Традиционная русская',
  'Барбекю',
  'Азиатская',
  'Кондитерская',
  'Рыбная',
]
const ratings = ['5 звёзд', '4 звезды', '3 звезды', '2 звезды', '1 звезда']
const deliveryTimes = ['До 30 минут', '30–40 минут', '40–50 минут']

interface FiltersProps {
  kitchenFilter: string | null
  onChangeKitchen: (v: string | null) => void
  ratingFilter: string | null
  onChangeRating: (v: string | null) => void
  timeFilter: string | null
  onChangeTime: (v: string | null) => void
}

function renderListbox(
  placeholder: string,
  options: string[],
  selected: string | null,
  onChange: (v: string | null) => void
) {
  return (
    <div className='relative w-full'>
      <Listbox value={selected} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Button
  className={cn(
    'w-full cursor-pointer rounded-md border bg-white py-2 pl-3 pr-10 text-left text-sm',
    open ? 'border-blue-500' : 'border-gray-300',
    'focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500 focus-visible:outline-offset-2'
  )}
>
              {selected ?? placeholder}
              {open ? (
                <ChevronUpIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500'
                />
              ) : (
                <ChevronDownIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500'
                />
              )}
            </Listbox.Button>
            <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg focus:outline-none'>
              <Listbox.Option
                value={null}
                className={({ active }) =>
                  cn(
                    'cursor-pointer select-none py-2 pl-4 text-sm',
                    active && 'bg-gray-100 text-blue-500',
                  )
                }
              >
                Все
              </Listbox.Option>
              {options.map(option => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    cn(
                      'cursor-pointer select-none py-2 pl-4 text-sm',
                      active && 'bg-gray-100 text-blue-500',
                    )
                  }
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  )
}

export function Filters({
  kitchenFilter,
  onChangeKitchen,
  ratingFilter,
  onChangeRating,
  timeFilter,
  onChangeTime,
}: FiltersProps) {
  return (
    <div className='flex w-full flex-col gap-2 lg:flex-row lg:gap-1.5 lg:self-start'>
      <div className='lg:w-60'>{renderListbox('Тип кухни', kitchenTypes, kitchenFilter, onChangeKitchen)}</div>
      <div className='lg:w-60'>{renderListbox('Рейтинг', ratings, ratingFilter, onChangeRating)}</div>
      <div className='lg:w-60'>{renderListbox('Время доставки', deliveryTimes, timeFilter, onChangeTime)}</div>
    </div>
  )
}

interface FiltersMenuProps {
  menu: Record<string, MenuItem[]>
  setFilterGroup: (group: string | null) => void
}

const menuCategories = ['Супы', 'Основные блюда', 'Десерты', 'Напитки']

export function FiltersMenu({ menu, setFilterGroup }: FiltersMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Object.keys(menu)

  const handleChange = (value: string | null) => {
    setSelectedCategory(value)
    setFilterGroup(value)
  }

  return (
    <div className='relative lg:w-60 lg:self-start'>
      <Listbox value={selectedCategory} onChange={handleChange}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={cn(
                'w-full cursor-pointer rounded-md border bg-white py-2 pl-3 pr-10 text-left text-sm',
                open ? 'border-blue-500' : 'border-gray-300',
                'focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500 focus-visible:outline-offset-2'
              )}
            >
              {selectedCategory ?? 'Категория'}
              {open ? (
                <ChevronUpIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500'
                />
              ) : (
                <ChevronDownIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500'
                />
              )}
            </Listbox.Button>
            <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg focus:outline-none'>
              <Listbox.Option
                key='all'
                value={null}
                className={({ active }) =>
                  cn('cursor-pointer select-none py-2 pl-4 text-sm', active && 'bg-gray-100 text-blue-500')
                }
              >
                Все категории
              </Listbox.Option>
              {categories.map(category => (
                <Listbox.Option
                  key={category}
                  value={category}
                  className={({ active }) =>
                    cn('cursor-pointer select-none py-2 pl-4 text-sm', active && 'bg-gray-100 text-blue-500')
                  }
                >
                  {category}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  )
}
