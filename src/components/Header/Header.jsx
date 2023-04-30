import { Outlet, NavLink } from 'react-router-dom'
import './index.css'

const Header = () => {
    return(
        <>
            <header className="header">
                <div className="hd-lg-container">
                    <img></img>
                </div>
                <div className="hd-menu-container">
                    <nav>
                        <ul>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/menu'}>Menu</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="hd-user-container"></div>
            </header>
            <Outlet></Outlet>
        </>
    )
}

export default Header