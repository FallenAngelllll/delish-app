import { Heading } from '@/components/atoms/Heading'
import { DishCard } from '@/components/organisms/cards/dish'

export default function OrderDetailsCard() {
  return (
    <div className='flex h-full flex-col gap-2 rounded-xl border border-gray-300 bg-white p-6 shadow-md shadow-gray-300 lg:gap-4'>
      <div className='flex justify-start'>
        <div className='flex w-full gap-3'>
          <span className='text-sm font-bold text-gray-500 lg:text-base'>20 ноября 2024</span>
          <span className='text-sm font-bold text-gray-500 lg:text-base'>14:35</span>
        </div>
        <span className='text-sm text-green-500 lg:text-base'>Доставлен</span>
      </div>

      <Heading level={3}>«Трапеза Ярополка»</Heading>

      <div className='flex flex-col gap-1'>
        <DishCard />
        <div aria-hidden='true' className='hidden h-px w-full bg-gray-300 lg:block'></div>
        <DishCard />
        <div aria-hidden='true' className='hidden h-px w-full bg-gray-300 lg:block'></div>
      </div>

      <div className='flex justify-end gap-2'>
        <span className='self-end text-xs text-gray-600 lg:text-sm'>Итого:</span>
        <span className='text-sm font-bold text-gray-800 lg:font-roboto lg:text-xl'>1 200 ₽</span>
      </div>

      <div aria-hidden='true' className='h-px w-full bg-gray-300 lg:hidden'></div>

      <div className='flex flex-col gap-2 lg:gap-4'>
        <span className='text-xs text-gray-800 lg:text-sm lg:font-bold'>Детали доставки:</span>

        <div className='flex flex-col gap-2 xl:flex-row xl:justify-between'>
          <DetailRow label='Адрес' value='г. Москва, ул. Примерная, д.5' />
          <DetailRow label='Оплата' value='Онлайн, карта *4425' />
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-2'>
          <span className='text-xs text-gray-400'>Курьер</span>
          <div className='flex justify-between lg:gap-2'>
            <span className='line-clamp-2 break-words text-xs text-gray-800 lg:text-base'>
              Доброгост Сварожич
            </span>
            <span className='line-clamp-2 break-words text-xs text-gray-800 lg:text-base'>
              +7 900 123-45-67
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex items-center justify-start gap-2'>
      <span className='text-xs text-gray-400'>{label}</span>
      <span className='line-clamp-3 break-words text-xs text-gray-800 lg:text-base'>{value}</span>
    </div>
  )
}
