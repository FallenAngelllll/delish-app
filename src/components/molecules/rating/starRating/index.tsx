import { Icon } from '@/components/atoms/icons/icon'
import { cn } from '@/utils/cn'

type StarRatingProps = {
  rating: number
  label?: string
  size?: string
  className?: string
  starsClassName?: string // добавляем для управления отступами между звёздами
}

export const StarRating = ({ rating, label, size, className, starsClassName }: StarRatingProps) => {
  const resolvedSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {label && <span className='text-base text-gray-600'>{label}:</span>}
      <div className={cn('flex', starsClassName ?? 'space-x-1')}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name='Star'
            className={cn(
              resolvedSize,
              i < rating ? 'fill-yellow-500 stroke-yellow-500' : 'fill-white stroke-gray-800',
            )}
          />
        ))}
      </div>
    </div>
  )
}
