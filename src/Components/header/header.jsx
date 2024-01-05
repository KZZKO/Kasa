import { NavLink } from "react-router-dom"
import './header.scss'

export const Header = () => {
    return (
        <header>
            <div className='header-bloc'>
                <div className="header-first-bloc">
                    <img src="/src/assets/Images/Logo/LOGO.png" alt="LogoKasa" />
                </div>
                <nav className="header-scnd-bloc">
                    <NavLink NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
                    <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>A Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}