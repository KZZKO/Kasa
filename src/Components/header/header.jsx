import { NavLink } from "react-router-dom"
import './header.scss'

export const Header = () => {
    return <header>
        <div className='header-bloc'>
        <div className="header-first-bloc">
            <img src="/src/assets/Images/Logo/LOGO.png" alt="LogoKasa" />
        </div>
        <nav className="header-scnd-bloc">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/About">A Propos</NavLink>
        </nav>
        </div>
        </header>
}