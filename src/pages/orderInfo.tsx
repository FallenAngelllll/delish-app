import RepeatOrderButton from '@/components/atoms/buttons/repeatOrderButton'
import OrderDetailsCard from '@/components/orderInfoPage/orderDetailsCard'
import OrderReviewForm from '@/components/orderInfoPage/orderReviewForm'
import Header from '@/components/ui/headers/header'
import HeaderMobile from '@/components/ui/headers/headerMobile'
import PageTitleWithBack from '@/components/ui/headers/pageTitleWithBack'

export default function OrderInfoPage() {
  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
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
      </div>
    </div>
  )
}
