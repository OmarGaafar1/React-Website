import React from 'react'
import foodImg from '../images/restauranfood.jpg'
import Bruchetta from '../images/bruchetta.svg'
import GreekSalad from '../images/greek salad.jpg'
import Lemon from '../images/Lemon.jpg'
import About from '../images/restaurant chef B.jpg'
import About2 from '../images/About.jpg'
import DeliveryBike from '../images/delivery.png'
import Macaroni from '../images/Macaroni.jpg'
import ratings from '../images/rating.png'
import Review1 from '../images/Review1.jpg'
import Review2 from '../images/Review2.jpg'
import Review3 from '../images/Review3.jpg'
import Review4 from '../images/Review4.jpg'

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
        
            <div className='highlights'>
                <h2>Special</h2>
                <button type='button'>Order Online</button>
            </div>
        <article className='highlights-container'>
            <section className='highlights-section'>
                <img  className= "specialImg" src= {Bruchetta}></img>
                <div className='section main1'>
                    <h4 style={{color:'black'}}>Bruchetta</h4>
                    <h4>$6.99</h4>
                </div>
                
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                <div className='delivery-Icon'>
                    <h5>Order a Delivery</h5>
                    <img src={DeliveryBike} className='deliveryBike'></img>
                </div>
            </section>

            <section className='highlights-section'>
                <img  className= "specialImg" src={GreekSalad} ></img>
                <div className='section main2'>
                    <h4 style={{color:'black'}}>Greek Salad</h4>
                    <h4>$12.99</h4>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <div className='delivery-Icon'>
                    <h5>Order a Delivery</h5>
                    <img src={DeliveryBike} className='deliveryBike'></img>
                </div>
            </section>

            <section className='highlights-section'>
                <img  className= "specialImg" src={Lemon}></img>
                <div className='section main3'>
                    <h4 style={{color:'black'}}>Lemon Dessert</h4>
                    <h4>$3.99</h4>
                </div>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                <div className='delivery-Icon'>
                    <h5>Order a Delivery</h5>
                    <img src={DeliveryBike} className='deliveryBike'></img>
                </div>
            </section>

            <section className='highlights-section'>
                <img  className= "specialImg" src={Macaroni}></img>
                <div className='section main4'>
                    <h4 style={{color:'black'}}>Macaroni</h4>
                    <h4>$8.99</h4>
                </div>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                <div className='delivery-Icon'>
                    <h5>Order a Delivery</h5>
                    <img src={DeliveryBike} className='deliveryBike'></img>
                </div>
            </section>

        </article>

        <article className='Testimonials'>
            <h1>Testimonials</h1>
            <div className='Testimonials-container'>


            <section className='review'>
                <img className='ratings' src={ratings}></img><br/>
                <div className='person-identity'>
                    <img className='person' src={Review1}></img>
                    <h3 >Ahmed Ali</h3>
                </div>
                <p >Excellent restaurant Great food</p>

            </section>

            <section className='review'>
                <img className='ratings' src={ratings}></img><br/>
                <div className='person-identity'>
                    <img className='person' src={Review2}></img>
                    <h3 >Mai Khaled</h3>
                </div>
                <p >little busy, but overall great restaurant</p>
            </section>


            <section className='review'>
                <img className='ratings' src={ratings}></img><br/>
                <div className='person-identity'>
                    <img className='person' src={Review3}></img>
                    <h3 >Omar Loay</h3>
                </div>
                <p >Very Good</p>
            </section>

            <section className='review'>
                <img className='ratings' src={ratings}></img><br/>
                <div className='person-identity'>
                    <img className='person' src={Review4}></img>
                    <h3 >M. Gaafar</h3>
                </div>
                <p >Excellent restaurant </p>
            </section>
            </div><br/>
        </article>

        
        <article className='About'>
            <section className='description'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </section>
            <section className='photo-stack'>
                <img className='positioned-photo photo1' src={About}></img>
                <img className='positioned-photo photo2' src={About2}></img>
            </section>
        </article>

    </main>
  )
}

export default Main