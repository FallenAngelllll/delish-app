import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

interface PageTitleWithBackProps {
  title: string
}

export default function PageTitleWithBack({ title }: PageTitleWithBackProps) {
  return (
    <div className='flex items-center gap-2'>
      <ArrowLongLeftIcon aria-hidden='true' className='h-6 w-6 text-gray-800' />
      <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>{title}</h1>
    </div>
  )
}
