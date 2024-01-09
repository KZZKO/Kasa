import React, { useState } from 'react';
import './collapse.scss';



export const Collapse = ({ title, description }) => {
  const [openCollapses, setOpenCollapses] = useState(false);

  const toggle = () => {
    setOpenCollapses(!openCollapses);
  };

  const stringToList = (data) => {
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <p>{data}</p>;
    }
  };

  return (
    <div className="collapse-elm">
      <div className="collapse-item">
        <div className="collapse-title" onClick={() => toggle()}>
          <h2>{title}</h2>
          <i className={`fa-solid fa-chevron-up ${openCollapses ? 'chevron-anim' : ''}`}></i>
        </div>
        <div className={`collapse-content ${openCollapses ? 'collapse-show' : ''}`}>
          {title === "Equipements" ? (stringToList(description)) : (<p>{description}</p>)}
        </div>
      </div>
    </div>
  );
};