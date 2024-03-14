import {Link, NavLink} from 'react-router-dom'
import logo from '/logo-restaurant.png'

const Header = () => {
  return(
    <header className='bg-white font-semibold border-b-2 border-gray-300 sm:sticky sm:top-0 z-10 '>
      <nav className='flex justify-center sm:justify-between text-gray-700 items-center'>
        <div className='flex justify-center items-center'>
          <Link to="/"><img src={logo} width='180'></img></Link>
        </div>
        <div className='hidden sm:block'>
          <ul id='navbar-list' className='flex justify-around items-center px-2'>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/menu">Menú</NavLink></li>
            <li><NavLink to="/favorites">Favoritos</NavLink></li>
            <li><NavLink to="/about">Nosotros</NavLink></li>
          </ul>   
        </div>
        <div className='hidden sm:flex justify-center items-center'>
          <Link to='/login' className='bg-gray-800 text-center text-white rounded-md py-3 px-1 md:px-2 lg:px-8 hover:bg-gray-950 ease-in duration-300'>Iniciar sesión</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header