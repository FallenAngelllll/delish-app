import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/24/outline'

export default function ProfileAvatar() {
  return (
    <div className='relative h-[5.75rem] w-[5.75rem] self-center lg:self-start'>
      <Image
        src='/images/avatar.svg'
        alt='Аватар пользователя'
        width={92}
        height={92}
        className='rounded-full'
      />
      <button
        type='button'
        aria-label='Изменить аватар профиля'
        className='absolute bottom-0 right-[-1.25rem] flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shadow-md hover:bg-blue-600 active:bg-blue-700'
      >
        <CameraIcon className='h-6 w-6 text-white' />
      </button>
    </div>
  )
}
