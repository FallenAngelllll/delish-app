import FormInput from '@/components/atoms/formInput'

export default function PasswordRestoreForm() {
  return (
    <form aria-labelledby='reset-password' className='flex flex-col'>
      <FormInput
        type='email'
        id='email'
        label='Email'
        placeholder='ivanov@yandex.ru'
        autoComplete='username'
        minLength={5}
        maxLength={100}
        required
        pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
      />
    </form>
  )
}
