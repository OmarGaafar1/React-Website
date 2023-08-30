import React from 'react'
import foodImg from '../images/restauranfood.jpg'



const Main = () => {
  return (
    <main className='main-container'>

        <article className='hero-container'>
            <section className='hero-section'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='button-32'>Reserve A Table</button>
            </section>
            <img src={foodImg} width={200} raduis></img>
        </article>
    </main>
  )
}

export default Main