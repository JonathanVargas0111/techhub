import { Header } from '@/components'
import { Cart } from '@/components/Cart'
import { ReactNode } from 'react'


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='
    h-[100dvh] '>
      <section className='h-[10dvh] py-4 px-5'>
        <Header />
      </section>
      <section className='h-[90dvh] lg:flex lg:gap-5'>
        <main className='basis-4/4 lg:basis-3/4 p-5 lg:pr-2 overflow-y-auto'>
          {children}
        </main>
        <div className=' lg:basis-1/4 p-5 lg:pl-2'>
          <Cart />
        </div>
      </section>

    </div>
  )
}

export default Layout