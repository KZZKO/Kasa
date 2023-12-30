import React, { useState } from 'react';
import Statement from '../../Data/Statement.json'
import './collapse.scss'

export const Collapse = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return <div className='collapse-bloc'>
            <div className='collapse-elm'>
                {Statement.map((item, i) => (
                    <div className='collapse-item'>
                        <div className='collapse-title' onClick={() => toggle(i)}>
                            <h2>{item.title}</h2>
                            <i class={selected === i ? 'fa-solid fa-chevron-up chevron-anim' : 'fa-solid fa-chevron-up'}></i>
                        </div>
                        <div className={selected === i ? 'collapse-content collapse-show' : 'collapse-content'}>{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
}