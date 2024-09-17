import { ProductCart } from '@/types'
import Image from 'next/image';
import React from 'react'

interface Props {
  product: ProductCart;
}

const CardQuiantityProduct = ({ product }: Props) => {
  const { name, image, price, quantity, description } = product;

  return (
    <div className='flex flex-row gap-x-2 items-center'>
      <div className='w-2/5'>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='object-contain w-full rounded-xl'
        >
        </Image>
      </div>
      <div className='w-3/5 px-2'>
        <div className='w-full h-full flex flex-row justify-between items-center text-base'>
          <h3 className='line-clamp-1 font-semibold'>{name}</h3>
          <p className='line-clamp-1 font-bold'>${(price * quantity).toFixed(2)}</p>
        </div>
        <div className=''>
          <p className='line-clamp-1'>{description}</p>
        </div>
        <div className='flex flex-row w-full items-center justify-between'>
          <div className='flex flex-row gap-x-5 max-w-32 items-center'>
            <button
              type='button'
              className='w-6 h-6 bg-primary rounded-full justify-center text-white flex items-center'>
              <i className='fi fi-rr-minus'></i>
            </button> 
            <span className='w10 h-10 flex items-center 
          justify-center'>{quantity}</span>
            <button
              type='button'
              className='w-6 h-6 bg-primary rounded-full justify-center text-white flex items-center'>
              <i className='fi fi-rr-plus'></i>
            </button>
          </div>
          <div>
              <button type='button' className='text-red-600 w-6 h-6' > 
                <i className="fi fi-rr-trash"></i>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardQuiantityProduct