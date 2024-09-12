import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"} className='relative rounded-full px-3 py-1 text-lg leading-6 text-gray-900 ring-2 ring-gray-900/80'>
        TechHub
    </Link>
  )
}

export default Logo