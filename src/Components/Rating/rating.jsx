import './rating.scss';


export const Rating = ({ rating }) => {
    // Déclaration du composant 'Rating' avec une prop 'rating' pour spécifier le niveau d'évaluation

    const maxStars = 5;
    // Nombre maximum d'étoiles
    const filledStars = Math.round(rating);
    // Nombre d'étoiles remplies, arrondi à la valeur entière la plus proche du niveau d'évaluation

    return (
        <div className='rating-bloc'>
            <div className='rating-stars'>
                {Array.from({ length: maxStars }, (_, index) => (
                    // Utilisation de la fonction 'Array.from' pour générer un tableau de la longueur de 'maxStars'
                    <span key={index} className={`star ${index < filledStars ? 'filled' : 'empty'}`}>
                        {/* Chaque étoile est représentée par un 'span' avec une classe dynamique en fonction de si elle est remplie ou vide */}
                        <i className="fa-solid fa-star"></i>
                    </span>
                ))}
            </div>
        </div>
    );
};