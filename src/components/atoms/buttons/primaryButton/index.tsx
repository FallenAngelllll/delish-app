interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  /** Дополнительные классы для кастомизации */
  className?: string
  /** Вариант (для разных цветовых схем) */
  variant?: 'primary' | 'card'
}

export default function Button({
  children,
  type = 'button',
  fullWidth = false,
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) {
  const base = 'py-2 font-bold rounded-lg'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    card: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 rounded-md',
  }

  return (
    <button
      type={type}
      className={[base, variants[variant], fullWidth && 'w-full', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
}
