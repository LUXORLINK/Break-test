import { NavLink } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
    return (
         <>
            <header className="header">
                <div className="container">
                    <NavLink to='/' className='header__logo'>Womazing</NavLink>
                    <nav className='header__menu'>
                        <NavLink to='/logo' className='header__link' >Главная</NavLink>
                        <NavLink to='/shop' className='header__link' >Магазин</NavLink>
                    </nav>
                </div>
            </header>
        </>
     )
 }
export default Header