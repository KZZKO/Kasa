import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './collapse.scss';

export const Collapse = ({ data }) => {
  const [openCollapses, setOpenCollapses] = useState([]);

  const toggle = (i) => {
    const isOpen = openCollapses.includes(i);
    // On vérifie si l'indice est déjà dans le tableau

    if (isOpen) {
      setOpenCollapses(openCollapses.filter((index) => index !== i));
      // Si il est ouvert, on le retire du tableau
    } else {
      setOpenCollapses([...openCollapses, i]);
      // Ou si il est fermer, on l'ajoute au tableau
    }
  };

  return (
    <div className="collapse-bloc">
      <div className="collapse-elm">
        {data.map((item, i) => (
          <div className="collapse-item" key={i}>
            <div className="collapse-title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <i className={`fa-solid fa-chevron-up ${openCollapses.includes(i) ? 'chevron-anim' : ''}`}></i>
            </div>
            <div className={`collapse-content ${openCollapses.includes(i) ? 'collapse-show' : ''}`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};