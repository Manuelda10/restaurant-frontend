import { NavLink } from "react-router-dom"
import home from '/assets/home.svg'
import chicken from '/assets/chicken.svg'
import favorite from '/assets/favorite.svg'
import cart from '/assets/shopping-cart.svg'

const Footer = () => {
  return(
    <footer className="sticky bottom-0 rounded-t-lg border-gray-300 bg-gray-950 sm:relative sm:text-center">
      <nav aria-label="Mobile footer navigation" className="sm:hidden font-semibold">
        <ul id="navbar-list-mobile" className="grid grid-cols-4 justify-around  text-gray-400">  
          <li className="h-full py-1 flex justify-center items-end">
            <NavLink to='/' className="flex flex-col items-center">
                <img src={home} alt="home-logo" width='35'></img>
                <p>Inicio</p>
            </NavLink>
          </li>
          <li className="h-full py-1 flex justify-center items-end">
            <NavLink to='/menu' className="flex flex-col items-center">
                <img src={chicken} alt="menu-logo" width='35'></img>
                <p>Menú</p>
            </NavLink>
          </li>
          <li className="h-full py-1 flex justify-center items-end">
            <NavLink to='/favorites' className="flex flex-col items-center">
                <img src={favorite} alt="favoritos-logo" width='32'></img>
                <p>Favoritos</p>
            </NavLink>
          </li>
          <li className="h-full py-1 flex justify-center items-end">
            <NavLink to='/about' className="flex flex-col items-center">
                <img src={cart} alt="carrito-logo" width='32'></img>
                <p>Carrito</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <h3 className="hidden sm:block text-white font-semibold p-2" >Developed by @Manuelda10</h3>
    </footer>
  )
}

export default Footer