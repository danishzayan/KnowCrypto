import { Link } from 'react-router-dom'
import LogoSVG from '../assets/logo.svg'

const Logo = () => {
  return (
    <Link to="/" className='absolute top-[1.3rem] text-center [text-decoration:none] font-bold text-lg text-lightgreen flex items-center'>
        <img src={LogoSVG} alt="" />
        <span>KnowCrypto</span>
    </Link>
  )
}

export default Logo