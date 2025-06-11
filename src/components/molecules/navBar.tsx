import Link from 'next/link'

import type { IconName } from '@/components/atoms/icons'
import { Icon } from '@/components/atoms/icons/icon'

type NavBarItem = {
  name: string
  href: string
  icon: IconName
}

type NavBarProps = {
  items: NavBarItem[]
}

export function NavBar({ items }: NavBarProps) {
  return (
    <nav className='flex flex-1 flex-col gap-6 p-5'>
      {items.map(({ name, href, icon }) => (
        <Link href={href} key={name} className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <Icon name={icon} className='h-6 w-6' aria-hidden='true' />
            <span className='text-base text-gray-800'>{name}</span>
          </div>
          <div className='h-px w-full bg-gray-300' aria-hidden='true' />
        </Link>
      ))}
    </nav>
  )
}
