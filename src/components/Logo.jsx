import React from 'react'
import { Link } from 'react-router-dom'
import LogoSVG from '../assets/logo.svg'

const Logo = () => {
  return (
    <Link to="/" className='absolute top-[1.5rem] left-[1.5rem] [text-decoration:none] text-lg text-lightgreen'>
        <img src={LogoSVG} alt="" />
        <span>KnowCrypto</span>
    </Link>
  )
}

export default Logo