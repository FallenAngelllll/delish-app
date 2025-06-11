import * as HeroIcons from '@heroicons/react/24/outline'

import { DiscountIcon } from '@/components/atoms/icons/discountIcon'
import { Star } from '@/components/atoms/icons/star'

import { Car } from './car'
import { Chat } from './chat'
import { Logo } from './logo'
import { Storage } from './storage'

export const icons = {
  ...HeroIcons,
  Car,
  Chat,
  Logo,
  Storage,
  DiscountIcon,
  Star,
} as const

export type IconName = keyof typeof icons
