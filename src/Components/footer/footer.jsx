import './footer.scss'

export const Footer = () => {
    return (
        <footer>
            <div className='footer-bloc'>
                <div className="footer-first-bloc">
                    <img src="/src/assets/Images/Logo/LOGOwhite.png" alt="LogoKasa" />
                </div>
                <div className="footer-scnd-bloc">
                    <i className="fa-regular fa-copyright"></i>
                    <p>2024 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}