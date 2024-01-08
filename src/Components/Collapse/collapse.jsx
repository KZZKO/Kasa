import React, { useState } from 'react';

import './collapse.scss';

export const Collapse = ({ title, description }) => {

  const [openCollapses, setOpenCollapses] = useState(false);

  const toggle = () => {

    // On vérifie si l'indice est déjà dans le tableau

    if (openCollapses) {
      setOpenCollapses(false);
      // Si il est ouvert, on le retire du tableau
    } else {
      setOpenCollapses(true);
      // Ou si il est fermer, on l'ajoute au tableau
    }
  };

  return (
    <div className="collapse-bloc">
      <div className="collapse-elm">
        <div div className="collapse-item" >
          <div className="collapse-title" onClick={() => toggle()}>
            <h2>{title}</h2>
            <i className={`fa-solid fa-chevron-up ${openCollapses ? 'chevron-anim' : ''}`}></i>
          </div>
          <div className={`collapse-content ${openCollapses ? 'collapse-show' : ''}`}>
            {description}
          </div>
        </div>
      </div>
    </div>
  )
};

// Collapse.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };