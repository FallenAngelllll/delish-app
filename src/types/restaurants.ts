import { StaticImageData } from 'next/image'

export interface Restaurant {
  id: string
  name: string
  rating: number
  description: string
  kitchenType: string
  time: string
  price: string
  image: StaticImageData // ВАЖНО
  recent: boolean
  favorite: boolean
  aboveFold?: boolean
}
