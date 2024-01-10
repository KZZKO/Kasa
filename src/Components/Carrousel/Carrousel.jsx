import React, { useState } from 'react';
import './Carrousel.scss';

export const Slider = ({ data }) => {
    // Définition du composant fonctionnel Slider qui prend un objet 'data' en tant que prop
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Utilisation du hook useState pour gérer l'index de l'image actuelle dans le carrousel

    const showPreviousImage = () => {
        // Fonction pour afficher l'image précédente dans le carrousel
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
    };

    const showNextImage = () => {
        // Fonction pour afficher l'image suivante dans le carrousel
        setCurrentImageIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <section className='back-slider'>
            <div className='bloc-slider'>
                <div className='img-slider'>
                    <img src={data[currentImageIndex]} alt="Image carrousel" />
                    <div className="counter">
                        <p>{currentImageIndex + 1} / {data.length}</p>
                    </div>
                    <button className='slider-btn-left' onClick={showPreviousImage}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className='slider-btn-right' onClick={showNextImage}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};