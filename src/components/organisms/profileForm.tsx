import FormInput from '@/components/atoms/formInput'

export default function ProfileForm() {
  return (
    <form className='flex w-full flex-col gap-3'>
      <div className='flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3'>
        <FormInput id='firstName' label='Имя' type='text' defaultValue='Ярополк' />
        <FormInput id='lastName' label='Фамилия' type='text' defaultValue='Иванов' />
      </div>

      <div className='flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-4'>
        <FormInput id='email' label='Email' type='email' defaultValue='ivanov@yandex.ru' />
        <FormInput id='accountName' label='Имя аккаунта' type='text' defaultValue='Yaropolk' />
      </div>

      <h3 className='mt-4 text-sm font-bold text-gray-800 lg:mt-5 lg:text-base'>Пароль</h3>

      <div className='md:grid md:grid-cols-2 md:gap-4'>
        <FormInput
          id='currentPassword'
          label='Существующий пароль'
          type='password'
          placeholder='*******'
        />
        <div /> {/* Пустой блок для выравнивания */}
      </div>

      <div className='flex flex-col gap-1 md:grid md:grid-cols-2 md:gap-4'>
        <FormInput id='password' label='Новый пароль' type='password' placeholder='*******' />
        <FormInput
          id='passwordConfirm'
          label='Повторите пароль'
          type='password'
          placeholder='*******'
        />
      </div>
    </form>
  )
}
