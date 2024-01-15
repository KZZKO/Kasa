import React, { useState } from 'react';
import './Carrousel.scss';

export const Slider = ({ data }) => {
    // Définition du composant fonctionnel Slider qui prend un objet 'data' en tant que prop
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Utilisation du hook useState pour gérer l'index de l'image actuelle dans le carrousel

    const showPreviousImage = () => {
        // Fonction pour afficher l'image précédente dans le carrousel
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
        // Si prevIndex est supérieur à 0, retourne d'une image en arrière, 
        // sinon, retourne à la dernière image du tableau 'data'
    };

    const showNextImage = () => {
        // Fonction pour afficher l'image suivante dans le carrousel
        setCurrentImageIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
        // Si prevIndex est inférieur à l'index maximal possible (longueur du tableau 'data' - 1), passe à l'image suivante
        // sinon, retourne à la première image du tableau 'data'
    };

    const HideArrowsAndCounter = data.length <= 1;
    // Déclaration de la variable 'HideArrowsAndCounter'
    // La variable sera 'true' si la longueur de 'data' est inférieure ou égale à 1,
    // sinon elle sera 'false'.

    return (
        <section className='back-slider'>
            <div className='bloc-slider'>
                <div className='img-slider'>
                    <img src={data[currentImageIndex]} alt="Image carrousel" />
                    {/* Condition pour masquer le compteur */}
                    {!HideArrowsAndCounter && (
                        <div className="counter">
                            <p>{currentImageIndex + 1} / {data.length}</p>
                        </div>
                    )}
                    {/* Condition pour masquer la flèche gauche */}
                    {!HideArrowsAndCounter && (
                        <button className='slider-btn-left' onClick={showPreviousImage}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    )}
                    {/* Condition pour masquer la flèche droite */}
                    {!HideArrowsAndCounter && (
                        <button className='slider-btn-right' onClick={showNextImage}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};