import birchbarkImg from '@/public/images/birchbarkYard.jpg'
import fishImg from '@/public/images/fishArtel.png'
import honeyImg from '@/public/images/honey.jpg'
import koptilnyaImg from '@/public/images/koptilnya.png'
import radmilaImg from '@/public/images/radmila.jpg'
import slavicImg from '@/public/images/slavicFeast.png'
import teaImg from '@/public/images/teaHouse.png'
import yaropolkImg from '@/public/images/yaropolk.jpg'

import jsonData from '@/public/api/get-restaurants.json'
import { StaticImageData } from 'next/image'

export interface Restaurants {
  id: string
  name: string
  rating: number
  description: string
  kitchenType: string
  time: string
  price: string
  image: StaticImageData
  recent: boolean
  favorite: boolean
}

// Соответствие строк путей к import'ам
const imageMap: Record<string, StaticImageData> = {
  '/images/yaropolk.jpg': yaropolkImg,
  '/images/honey.jpg': honeyImg,
  '/images/slavicFeast.png': slavicImg,
  '/images/birchbarkYard.jpg': birchbarkImg,
  '/images/koptilnya.png': koptilnyaImg,
  '/images/teaHouse.png': teaImg,
  '/images/radmila.jpg': radmilaImg,
  '/images/fishArtel.png': fishImg,
}

export const restaurants: Restaurants[] = jsonData.map((item) => ({
  ...item,
  image: imageMap[item.image] || yaropolkImg,
}))
