import './rating.scss';


export const Rating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = Math.round(rating);

    return (
        <div className='rating-bloc'>
            <div className='rating-stars'>
                {Array.from({ length: maxStars }, (_, index) => (
                    <span key={index} className={`star ${index < filledStars ? 'filled' : 'empty'}`}>
                        <i className="fa-solid fa-star"></i>
                    </span>
                ))}
            </div>
        </div>
    );
};