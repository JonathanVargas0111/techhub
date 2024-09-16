import { Product } from '@/types'
import { calculateDiscountedPrice, isOutOfStock } from '@/utils/productUtils'
import { cn } from '@/utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback } from 'react'

interface Props {
    product: Product
}



const CardProduct = ({ product }: Props) => {


    const { name, image, description, discount, price, stock } = product
    const discountedPrice = useCallback(()=>calculateDiscountedPrice(price, discount),[price,discount])
    const stockAvailabity = useCallback(()=>isOutOfStock(stock),[stock])

    return (
        <div className='relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
            <Link className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-md' href={`#`}>
                <Image src={image} alt={name} width={300} height={250} className='object-cover w-full h-auto' />
                {discount > 0 && (
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {discount}% OFF
                    </span>
                )}
                {stockAvailabity() && (
                    <span className='absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white'>Agotado</span>
                )}
            </Link>
            <div className='mt-4 px-5 pb-5'>
                <h3 className='text-lg md:text-3xl font-bold line-clamp-1'>{name}</h3>
                <p className='text-gray-500 line-clamp-2'>{description}</p>
                <div className='flex flex-col space-y-2'>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p className='space-x-1'>
                            <span className="text-3xl font-bold text-slate-900">
                                {stock > 0 ? `$${discountedPrice()}` : ""}
                            </span>
                            <span className="text-sm text-slate-900 line-through">
                                {stock > 0 && discount > 0 ? `$${price.toFixed(2)}` : ""}
                            </span>
                        </p>
                    </div>
                    <button className={cn("flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300", isOutOfStock(stock) && "hover:bg-background bg-background text-gray-500 cursor-default")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProduct