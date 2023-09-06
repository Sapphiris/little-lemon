import React from 'react';
import './Specials.css';
import { Link } from 'react-router-dom';

import salad from '../../images/salad.jpg'
import bruschetta from '../../images/bruchetta.jpg'
import cake from '../../images/cake.jpg'
import chicken from '../../images/chicken.png'
import stew from '../../images/stew.png'

const Specials = () => {
    return (
        <section className='specials'>
            <div className='specials-heading'>
                <h1>Specials</h1>
                <Link to="/"><button>Online Menu</button></Link>
            </div>
            <div className='specials-cards'>
                <article className='food-cards'>
                    <img src={salad} alt='Salad'></img>
                    <div className='food-description'>
                        <div className='food-name-price'>
                            <h3 className='food-name'>Greek salad</h3>
                            <h3 className='food-price'>$12.99</h3>
                        </div>
                        <p className='food-description-text'>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <Link to="/"><Link to="/"><p className='order-delivery'>Order a delivery →</p></Link></Link>
                    </div>
                </article>
                <article className='food-cards'>
                    <img src={bruschetta} alt='Bruschetta'></img>
                    <div className='food-description'>
                        <div className='food-name-price'>
                            <h3 className='food-name'>Bruschetta</h3>
                            <h3 className='food-price'>$5.99</h3>
                        </div>
                        <p className='food-description-text'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <Link to="/"><p className='order-delivery'>Order a delivery →</p></Link>
                    </div>
                </article>
                <article className='food-cards'>
                    <img src={cake} alt='Cake'></img>
                    <div className='food-description'>
                        <div className='food-name-price'>
                            <h3 className='food-name'>Lemon Dessert</h3>
                            <h3 className='food-price'>$4.99</h3>
                        </div>
                        <p className='food-description-text'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <Link to="/"><p className='order-delivery'>Order a delivery →</p></Link>
                    </div>
                </article>
                <article className='food-cards'>
                    <img src={chicken} alt='Chicken'></img>
                    <div className='food-description'>
                        <div className='food-name-price'>
                            <h3 className='food-name'>Provençal</h3>
                            <h3 className='food-price'>$14.99</h3>
                        </div>
                        <p className='food-description-text'>With bold sun-kissed flavours, this classic Chicken Provençal is an uncomplicated recipe reminiscing of warm summers in the South of France.</p>
                        <Link to="/"><p className='order-delivery'>Order a delivery →</p></Link>
                    </div>
                </article>
                <article className='food-cards'>
                    <img src={stew} alt='Stew'></img>
                    <div className='food-description'>
                        <div className='food-name-price'>
                            <h3 className='food-name'>Fish Stew</h3>
                            <h3 className='food-price'>$13.99</h3>
                        </div>
                        <p className='food-description-text'>This Portugese fish stew is a traditional stew consisting of a wide variety of fish and potatoes, along with other ingredients.</p>
                        <Link to="/"><p className='order-delivery'>Order a delivery →</p></Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Specials;