// components/organisms/BurgerMenu.tsx
import { XMarkIcon } from '@heroicons/react/24/solid'

import { Icon } from '@/components/atoms/icons/icon'
import { NavBar } from '@/components/molecules/navBar'

type BurgerMenuProps = {
  onClose: () => void
}

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
  const items = [
    { name: 'Главная', href: '/', icon: 'HomeIcon' },
    { name: 'Отслеживание заказа', href: '#', icon: 'Car' },
    { name: 'Чат поддержки', href: '#', icon: 'Chat' },
    { name: 'Профиль', href: '/login', icon: 'UserIcon' },
    { name: 'Ваши заказы', href: '#', icon: 'Storage' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[url('/images/bgImageM.jpg')] bg-cover lg:hidden">
      <div className='flex justify-between p-4'>
        <Icon name='Logo' aria-hidden='true' className='h-8 w-auto' />
        <button onClick={onClose} aria-label='Закрыть меню' className='h-6 w-6'>
          <XMarkIcon className='h-6 w-6' />
        </button>
      </div>

      <NavBar items={items} />
    </div>
  )
}
