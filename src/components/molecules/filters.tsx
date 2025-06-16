import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

import { cn } from '@/utils/cn'

const kitchenTypes = [
  'Все',
  'Славянская',
  'Европейская',
  'Русская',
  'Традиционная русская',
  'Барбекю',
  'Азиатская',
  'Кондитерская',
  'Рыбная',
]
const ratings = ['Все', '5 звёзд', '4 звезды', '3 звезды']
const deliveryTimes = ['Все', 'До 30 минут', '30–40 минут', '40–50 минут']

export function Filters() {
  const [selectedKitchenType, setSelectedKitchenType] = useState<string | null>(null)
  const [selectedRating, setSelectedRating] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [openList, setOpenList] = useState<string | null>(null)

  const renderListbox = (
    placeholder: string,
    options: string[],
    selected: string | null,
    setSelected: (value: string) => void,
    listName: string,
  ) => (
    <div className='relative w-full'>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Button
              onClick={() => setOpenList(open ? null : listName)}
              className={cn(
                'w-full cursor-pointer rounded-md border bg-white py-2 pl-3 pr-10 text-left text-sm',
                open ? 'border-blue-500' : 'border-gray-300',
              )}
            >
              {selected || placeholder}
              {open ? (
                <ChevronUpIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 transform text-gray-500'
                />
              ) : (
                <ChevronDownIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 transform text-gray-500'
                />
              )}
            </Listbox.Button>
            <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg'>
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

  return (
    <div className='flex w-full flex-col gap-2 lg:flex-row lg:gap-1.5 lg:self-start'>
      <div className='lg:w-[200px]'>
        {renderListbox(
          'Тип кухни',
          kitchenTypes,
          selectedKitchenType,
          setSelectedKitchenType,
          'kitchenType',
        )}
      </div>
      <div className='lg:w-[200px]'>
        {renderListbox('Рейтинг ресторана', ratings, selectedRating, setSelectedRating, 'rating')}
      </div>
      <div className='lg:w-[200px]'>
        {renderListbox('Время доставки', deliveryTimes, selectedTime, setSelectedTime, 'time')}
      </div>
    </div>
  )
}

const menuCategories = ['Супы', 'Основные блюда', 'Десерты', 'Напитки']

export function FiltersMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className='relative lg:w-[200px] lg:self-start'>
      <Listbox value={selectedCategory} onChange={setSelectedCategory}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={cn(
                'w-full cursor-pointer rounded-md border bg-white py-2 pl-3 pr-10 text-left text-sm',
                open ? 'border-blue-500' : 'border-gray-300',
              )}
            >
              {selectedCategory || 'Категория'}
              {open ? (
                <ChevronUpIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 transform text-gray-500'
                />
              ) : (
                <ChevronDownIcon
                  aria-hidden='true'
                  className='absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 transform text-gray-500'
                />
              )}
            </Listbox.Button>
            <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg'>
              {menuCategories.map(category => (
                <Listbox.Option
                  key={category}
                  value={category}
                  className={({ active }) =>
                    cn(
                      'cursor-pointer select-none py-2 pl-4 text-sm',
                      active && 'bg-gray-100 text-blue-500',
                    )
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
