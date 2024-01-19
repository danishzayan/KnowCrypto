import React from 'react'
import CardComponent from '../components/CardComponent'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'

const Crypto = () => {
  return (
    <section className='w-[80%] flex flex-col h-full mt-6 mb-12 relative'>
        <Filters />
        <CardComponent />
        <div className='flex items-center justify-between capitalize mt-4 h-2'>
          <span className='text-[0.9rem]'>Data Provided by <a className='text-lightgreen underline' href="http://www.coingecko.com" rel='noreferrer' target={'_blank'}>CoinGecko-API</a></span>
          <Pagination />
        </div>
    </section>
  )
}

export default Crypto