import Appartements from '../../Data/Appartements.json';
import './cards.scss';

export const Cards = () => {
    return (
    <div className='card-bloc'>
        <div className='card-elm'>
        {Appartements.map((Card) => (
            <div className='card'>
                <img src={Card.cover} alt="Image de l'appartement" />
                <p>{Card.title}</p>
            </div>
        ))}
        </div>
    </div>
    )
}