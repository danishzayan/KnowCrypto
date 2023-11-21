import React from 'react'
import Search from './Search'

const Filters = () => {
  return (
    <div className='w-full h-12 border border-lightgreen rounded-lg flex items-center justify-between relative px-3'>
        <Search />
        <div>Currency</div>
        <div>Sorting</div>
    </div>
  )
}

export default Filters