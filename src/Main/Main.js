import React from 'react';
import './Main.css';
import Intro from './Intro/Intro.js';
import Specials from './Specials/Specials.js';
import Testimonials from './Testimonials/Testimonials.js';


const Main = () => {
    return (
        <main className="main">
            <Intro />
            <Specials />
            <Testimonials />
        </main>
    )
}

export default Main;