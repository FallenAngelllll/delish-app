import RepeatOrderButton from '@/components/atoms/buttons/repeatOrderButton'
import MainLayout from '@/components/layouts/MainLayout'
import PageTitleWithBack from '@/components/organisms/headers/pageTitleWithBack'
import OrderDetailsCard from '@/components/organisms/orderDetailsCard'
import OrderReviewForm from '@/components/organisms/orderReviewForm'

export default function OrderInfoPage() {
  return (
    <MainLayout backgroundFit='cover'>
      <PageTitleWithBack title='Информация о заказе' />
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-3'>
        <div className='flex flex-col gap-3 lg:w-1/2'>
          <OrderDetailsCard />
          <RepeatOrderButton />
        </div>
        <div className='flex h-full flex-col gap-2 lg:w-1/2'>
          <OrderReviewForm />
        </div>
      </div>
    </MainLayout>
  )
}
