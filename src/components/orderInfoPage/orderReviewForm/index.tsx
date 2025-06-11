import PrimaryButton from '@/components/atoms/buttons/primaryButton'
import { StarRating } from '@/components/molecules/rating/starRating'

export default function OrderReviewForm() {
  return (
    <div className='flex h-full flex-col gap-2 rounded-xl border border-gray-300 bg-white p-6 shadow-md shadow-gray-300'>
      <div className='flex flex-col gap-4'>
        <h3 className='font-roboto text-base font-bold text-gray-800 lg:text-xl'>Оценить заказ</h3>

        <div className='flex flex-col gap-3 xl:flex-row xl:justify-between'>
          <StarRating rating={5} label='Ресторан' className='space-x-4' />
          <StarRating rating={4} label='Доставка' className='space-x-4' />
        </div>

        <form className='flex flex-col gap-2.5'>
          <span className='text-sm text-gray-500'>Ваш отзыв</span>
          <textarea
            id='review'
            placeholder='Что Вам понравилось?'
            minLength={1}
            maxLength={1000}
            className='text-top h-[7.5rem] rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
          />
          <PrimaryButton type='submit'>Оставить отзыв</PrimaryButton>
        </form>
      </div>
    </div>
  )
}
