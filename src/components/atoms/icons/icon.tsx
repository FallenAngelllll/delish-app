import React from 'react'

import { cn } from '@/utils/cn'

import { IconName, icons } from './index'

interface IconProps {
  name: IconName
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const Component = icons[name]
  if (!Component) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
  return <Component className={cn('h-6 w-6', className)} />
}
