'use client'

import React from 'react'
import { useRouter } from 'next/router'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

import { Heading } from '@/components/atoms/Heading'

interface PageTitleWithBackProps {
  title: string
}

export default function PageTitleWithBack({ title }: PageTitleWithBackProps) {
  const router = useRouter()

  return (
    <div className='flex items-center gap-2'>
      <ArrowLongLeftIcon
        aria-hidden='true'
        onClick={() => router.back()}
        className='h-6 w-6 text-gray-800'
      />
      <Heading>{title}</Heading>
    </div>
  )
}
