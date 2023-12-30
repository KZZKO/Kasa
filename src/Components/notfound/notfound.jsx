import { Link } from "react-router-dom"
import './notfound.scss'

export const Notfound = () => {
    return (
    <div className="errorpage">
        <h1>
            404
        </h1>
        <p>
            Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
    )
}