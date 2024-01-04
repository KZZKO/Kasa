import React, { useState } from 'react';
import './Carrousel.scss';

export const Slider = ({ data }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <section className='back-slider'>
            <div className='bloc-slider'>
                <div className='img-slider'>
                    <img src={data[currentImageIndex]} alt="Image carrousel" />
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