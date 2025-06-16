import React from 'react'
import clsx from 'clsx'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps {
  level?: HeadingLevel
  className?: string
  children: React.ReactNode
}

const defaultClasses = {
  1: 'font-roboto text-2xl font-bold text-gray-800 lg:text-3xl',
  2: 'font-roboto text-2xl font-bold text-gray-800',
  3: 'text-sm font-bold text-gray-800 lg:font-roboto lg:text-xl',
}

export const Heading: React.FC<HeadingProps> = ({ level = 1, className, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className={clsx(defaultClasses[level], className)}>{children}</Tag>
}
