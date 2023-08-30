import React from 'react'

import About from '../images/restaurant chef B.jpg'
import About2 from '../images/About.jpg'
const Chicago = () => {
  return (
    <article className='About'>
            <section className='description'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </section>
                <img className='positioned-photo photo1' src={About}></img>
                <img className='positioned-photo photo2' src={About2}></img>
        </article>
  )
}

export default Chicago