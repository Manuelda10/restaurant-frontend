import {Link, NavLink} from 'react-router-dom'
import logo from '/logo-restaurant.png'

const Header = () => {
  return(
    <header className='bg-white font-semibold border-b-2 border-gray-300 sm:sticky sm:top-0'>
      <nav className='flex justify-center sm:justify-between items-center'>
        <div>
          <Link to="/"><img src={logo} width='180'></img></Link>
        </div>
        <div className='hidden sm:block'>
          <ul className='flex justify-around items-center'>
            <li><NavLink to="/" className='bg-orange-500 text-white rounded-xl py-3 px-3 md:px-6 mx-1 md:mx-4 hover:bg-orange-600 ease-in duration-300'>Inicio</NavLink></li>
            <li><NavLink to="/menu"className='mx-1 md:mx-4'>Menú</NavLink></li>
            <li><NavLink to="/favorites" className='mx-1 md:mx-4'>Favoritos</NavLink></li>
            <li><NavLink to="/about" className='mx-1 md:mx-4'>Nosotros</NavLink></li>
          </ul>   
        </div>
        <div className='hidden sm:block'>
          <Link to='/login' className='bg-gray-800 text-white rounded-xl py-3 px-3 md:px-4 lg:px-8 hover:bg-gray-950 ease-in duration-300'>Iniciar sesión</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header