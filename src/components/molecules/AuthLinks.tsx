import Link from 'next/link'

interface AuthLinksProps {
  primaryText: string
  mobileText?: string
  linkText: string
  href: string
  ariaLabel?: string
}

export default function AuthLinks({
  primaryText,
  mobileText,
  linkText,
  href,
  ariaLabel,
}: AuthLinksProps) {
  return (
    <div className='flex flex-col gap-1 lg:gap-2'>
      {mobileText ? (
        <>
          <span className='hidden text-sm text-gray-500 lg:block'>{primaryText}</span>
          <span className='text-xs text-gray-500 lg:hidden'>{mobileText}</span>
        </>
      ) : (
        <span className='text-xs text-gray-500 lg:text-sm'>{primaryText}</span>
      )}
      <Link
        href={href}
        aria-label={ariaLabel || `Перейти по ссылке ${linkText}`}
        className='text-sm font-bold text-blue-600 hover:underline'
      >
        {linkText}
      </Link>
    </div>
  )
}
