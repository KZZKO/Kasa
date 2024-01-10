import { useNavigate } from 'react-router-dom';
import './cards.scss';

export const Cards = ({ data }) => {
    // Définition du composant fonctionnel Cards qui prend un objet 'data' en tant que prop
    const navigate = useNavigate();
    // Initialisation de la fonction de navigation à partir de react-router-dom

    return (
        <div className='card-bloc'>
            <div className='card-elm'>
                {data.map((item) => (
                    <article key={item.id} className='card' onClick={() => { navigate(`/Appartement/${item.id}`); }}>
                        <img src={item.cover} alt="Image de l'appartement" />
                        <p>{item.title}</p>
                    </article>
                ))}
            </div>
        </div>
    );
};