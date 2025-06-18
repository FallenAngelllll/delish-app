import Image, { StaticImageData } from 'next/image'

import { cn } from '@/utils/cn'

interface CardImageProps {
  src: string | StaticImageData
  alt: string
  className?: string
  aboveFold?: boolean
  sizes?: string
}

export const CardImage = ({
  src,
  alt,
  className,
  aboveFold = false,
  sizes = '(max-width: 768px) 100vw, 33vw',
}: CardImageProps) => (
  <div className={cn('relative aspect-[4/3] w-full overflow-hidden rounded-lg', className)}>
    <Image src={src} alt={alt} fill className='object-cover' priority={aboveFold} sizes={sizes} />
  </div>
)
