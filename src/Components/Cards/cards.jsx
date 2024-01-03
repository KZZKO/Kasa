import Appartements from '../../Data/Appartements.json';
import { useNavigate } from "react-router-dom";
import './cards.scss';

export const Cards = () => {

    const navigate = useNavigate();

    return (
        <div className='card-bloc'>
            <div className='card-elm'>
                {Appartements.map((Card) => (
                    <div className='card' onClick={() => { navigate("/Appartement/" + Card.id); }}>
                        <img src={Card.cover} alt="Image de l'appartement" />
                        <p>{Card.title}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}