// import React from 'react'
import { Outlet } from 'react-router-dom'
import CardComponent from '../components/CardComponent'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'

const Crypto = () => {
  return (
    <section className='w-[80%] flex flex-col h-full mb-12 mt-8 relative'>
        <Filters />
        <CardComponent />
        <div className='flex items-center justify-between capitalize h-2'>
          <span className='text-[0.9rem]'>Data Provided by <a className='text-lightgreen underline' href="http://www.coingecko.com" rel='noreferrer' target={'_blank'}>CoinGecko-API</a></span>
          <Pagination />
        </div>
        <Outlet />
    </section>
  )
}

export default Crypto