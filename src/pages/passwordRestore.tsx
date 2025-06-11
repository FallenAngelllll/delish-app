import PrimaryButton from '@/components/atoms/buttons/primaryButton'
import PasswordRestoreForm from '@/components/passwordRestorePage/passwordRestoreForm'
import PasswordRestoreLinks from '@/components/passwordRestorePage/passwordRestoreLinks'

export default function PasswordRestorePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-[url('/images/bgImage.jpg')]">
      <div className='mt-5 flex w-full max-w-[23.75rem] flex-col lg:mt-0 lg:rounded-xl lg:border lg:border-gray-300 lg:bg-white lg:shadow-lg'>
        <div className='flex flex-col gap-9 px-5 py-6 lg:px-6 lg:py-10'>
          <div className='flex flex-col gap-7'>
            <h2
              id='reset-password'
              className='font-roboto text-xl font-bold text-gray-800 lg:text-2xl'
            >
              Восстановление пароля
            </h2>
            <p className='text-sm text-gray-800 lg:text-base'>
              Укажите почту, на которую регистрировали аккаунт, и мы отправим инструкцию по
              восстановлению пароля.
            </p>
            <PasswordRestoreForm />
          </div>
          <PrimaryButton type='submit'>Восстановить</PrimaryButton>
          <PasswordRestoreLinks />
        </div>
      </div>
    </div>
  )
}
