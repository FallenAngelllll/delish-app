import { cn } from '@/utils/cn'

interface InfoRowProps {
  label: string
  value: string
  variant?: 'flex' | 'grid'
  className?: string
}

export const InfoRow = ({ label, value, variant = 'flex', className }: InfoRowProps) => {
  const baseStyles = 'w-full text-sm text-gray-600'
  const isGrid = variant === 'grid'

  return isGrid ? (
    <div className={cn('grid grid-cols-[max-content,1fr] gap-2', baseStyles, className)}>
      <span className='whitespace-nowrap'>{label}</span>
      <span className='break-words text-right'>{value}</span>
    </div>
  ) : (
    <div className={cn('flex justify-between', baseStyles, className)}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
