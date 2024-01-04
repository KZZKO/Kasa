import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './cards.scss';

export const Cards = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className='card-bloc'>
            <div className='card-elm'>
                {data.map((item) => (
                    <div key={item.id} className='card' onClick={() => { navigate(`/Appartement/${item.id}`); }}>
                        <img src={item.cover} alt="Image de l'appartement" />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

Cards.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};