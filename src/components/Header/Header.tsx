import {Link, NavLink} from 'react-router-dom'
import logo from '/logo-restaurant.png'

const Header = () => {
  return(
    <header className='font-semibold border-b-2 border-gray-300'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link to="/"><img src={logo} width='180'></img></Link>
        </div>
        <div>
          <ul className='flex justify-around items-center'>
            <li><NavLink to="/" className='bg-orange-400 text-white rounded-xl py-3 px-7 mx-4 hover:bg-orange-500 ease-in duration-300'>Inicio</NavLink></li>
            <li><NavLink to="/menu"className='mx-4'>Menú</NavLink></li>
            <li><NavLink to="/favorites" className='mx-4'>Favoritos</NavLink></li>
            <li><NavLink to="/about" className='mx-4'>Nosotros</NavLink></li>
          </ul>
        </div>
        <div>
          <div>

            <Link to='/login' className='bg-blue-950 text-white rounded-xl py-3 px-6 hover:bg-gray-950 ease-in duration-300'>Iniciar sesión</Link>
          </div>
        </div>  
      </nav>
    </header>
  )
}

export default Header