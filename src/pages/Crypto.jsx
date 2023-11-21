import React from 'react'
import CardComponent from '../components/CardComponent'
import Filters from '../components/Filters'

const Crypto = () => {
  return (
    <section className='w-[80%] flex flex-col h-full mt-6 mb-24 relative'>
        <Filters />
        <CardComponent />
    </section>
  )
}

export default Crypto