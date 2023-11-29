import React from 'react'
import CardComponent from '../components/CardComponent'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'

const Crypto = () => {
  return (
    <section className='w-[80%] flex flex-col h-full mt-6 mb-12 relative'>
        <Filters />
        <CardComponent />
        <Pagination />
    </section>
  )
}

export default Crypto