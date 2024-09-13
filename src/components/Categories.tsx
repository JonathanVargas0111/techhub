import { categories } from '@/assets/data'
import { cn } from '@/utils/utils'
import React from 'react'

const Categories = () => {
  return (
    <div>
        <ul className='flex items-center gap-x-1 flex-nowrap border border-black/10 p-1 rounded-full 
         max-w-full overflow-x-auto'>
           
            {
                categories.map((category)=>(
                    <li key={category.category}>
                        <button type='button' 
                        className={cn("py-3 px-6 font-medium rounded-full transition-colors", category.category==="Todos" ? "bg-primary font-medium rounded-full border border-solid text-white" : "hover:bg-white/30" )}> 
                            {category.category}
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Categories