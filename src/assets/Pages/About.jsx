import React from 'react';
import { Header } from '../../Components/header/header.jsx';
import { Bannertwo } from '../../Components/banner/bannertwo.jsx';
import { Collapse } from '../../Components/Collapse/collapse.jsx';
import { Footer } from '../../Components/footer/footer.jsx';
import Statement from '../../Data/Statement.json';



export const About = () => {





    return (
        <div>
            <Header />
            <Bannertwo />
            {
                Statement.map((item, i) => {
                    return <Collapse title={item.title} description={item.text} key={i} />
                })
            }
            <Footer />
        </div >
    )
}