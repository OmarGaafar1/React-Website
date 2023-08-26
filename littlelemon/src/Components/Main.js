import React from 'react'
import foodImg from '../images/restauranfood.jpg'
import Bruchetta from '../images/bruchetta.svg'
import GreekSalad from '../images/greek salad.jpg'
import Lemon from '../images/Lemon.jpg'
import About from '../images/About.jpg'
import About2 from '../images/About2.jpg'
const Main = () => {
  return (
    <main>

        <article className='Hero'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean  Curabitur nec dolor sit amet diam fermentu</p>
            <button type='button'>Reserve A Table</button>
            <img src={foodImg} width={200} raduis></img>
        </article>
        
        <article className='Highlights' style={{backgroundColor:'red'}}>
            <h2>Special</h2>
            <button type='button'>Order Online</button>
            <section>
                <img src= {Bruchetta}></img>
                <h5>Bruchetta</h5>
                <h5>$2.99</h5>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <h5>Order a Delivery</h5>
            </section>

            <section>
                <img src={GreekSalad} width={200}></img>
                <h5>Greek Salad</h5>
                <h5>$2.99</h5>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <h5>Order a Delivery</h5>
            </section>

            <section>
                <img src={Lemon}></img>
                <h5>Lemon</h5>
                <h5>$2.99</h5>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <h5>Order a Delivery</h5>
            </section>



        </article>

        <article className='Testimonials'>
            
        </article>

        
        <article className='About'>
            <h2>Little Lemon</h2>
            <h5>Chicago</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec pharetra ex. Nunc et fringilla magna, eu bibendum ante. Mauris nisi felis, sollicitudin quis aliquet id, </p>
            <img src={About}></img>
            <img src={About2}></img>
        </article>

    </main>
  )
}

export default Main