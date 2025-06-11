import PrimaryButton from '@/components/atoms/buttons/primaryButton'
import RegistrationForm from '@/components/registrationPage/registrationForm'
import RegistrationLinks from '@/components/registrationPage/registrationLinks'

export default function RegistrationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-[url('/images/bgImage.jpg')]">
      <div className='mt-5 flex w-full max-w-[23.75rem] flex-col lg:mt-0 lg:rounded-xl lg:border lg:border-gray-300 lg:bg-white lg:shadow-lg'>
        <div className='flex flex-col gap-7 px-5 py-6 lg:gap-8 lg:px-6 lg:py-10'>
          <div className='flex flex-col gap-6 lg:gap-6'>
            <h2
              id='registration'
              className='font-roboto text-xl font-bold text-gray-800 lg:text-2xl'
            >
              Регистрация
            </h2>
            <RegistrationForm />
          </div>
          <PrimaryButton type='submit'>Зарегистрироваться</PrimaryButton>
          <RegistrationLinks />
        </div>
      </div>
    </div>
  )
}
