import FormInput from '@/components/atoms/formInput'

export default function RegistrationForm() {
  return (
    <form aria-labelledby='registration' className='flex flex-col gap-3.5 lg:gap-4'>
      <FormInput
        label='Имя'
        id='firstName'
        type='text'
        placeholder='Ярополк'
        autoComplete='given-name'
        pattern='^[a-zA-Zа-яА-ЯёЁ\-]+$'
        minLength={2}
        maxLength={50}
      />
      <FormInput
        label='Фамилия'
        id='lastName'
        type='text'
        placeholder='Иванов'
        autoComplete='family-name'
        pattern='^[a-zA-Zа-яА-ЯёЁ\-]+$'
        minLength={2}
        maxLength={50}
      />
      <FormInput
        label='Email'
        id='email'
        type='email'
        placeholder='ivanov@yandex.ru'
        autoComplete='username'
        pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        minLength={5}
        maxLength={100}
      />
      <FormInput
        label='Придумайте пароль'
        id='password'
        type='password'
        placeholder='******'
        pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$'
        minLength={6}
        maxLength={100}
      />
      <FormInput
        label='Повторите пароль'
        id='passwordConfirm'
        type='password'
        placeholder='******'
        pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$'
        minLength={6}
        maxLength={100}
      />
    </form>
  )
}
