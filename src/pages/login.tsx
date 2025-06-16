import PrimaryButton from '@/components/atoms/buttons/primaryButton'
import AuthLinks from '@/components/molecules/AuthLinks'
import LoginForm from '@/components/molecules/loginForm'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-[url('/images/bgImage.jpg')]">
      <div className='mt-7 flex w-full max-w-[23.75rem] flex-col lg:mt-0 lg:rounded-xl lg:border lg:border-gray-300 lg:bg-white lg:shadow-lg'>
        <div className='flex flex-col gap-8 px-5 py-6 lg:px-6 lg:py-10'>
          <div className='flex flex-col gap-5 lg:gap-6'>
            <h2 id='login' className='font-roboto text-xl font-bold text-gray-800 lg:text-2xl'>
              Вход в аккаунт
            </h2>
            <LoginForm />
          </div>
          <PrimaryButton type='submit'>Войти</PrimaryButton>
          <AuthLinks
            primaryText='У вас ещё нет аккаунта?'
            mobileText='Нет аккаунта?'
            linkText='Зарегистрироваться'
            href='/registration'
          />
        </div>
      </div>
    </div>
  )
}
