import React from 'react'
import ratings from '../images/rating.png'
import Review1 from '../images/Review1.jpg'
import Review2 from '../images/Review2.jpg'
import Review3 from '../images/Review3.jpg'
import Review4 from '../images/Review4.jpg'
const CustomerSay = (props) => {
  return (
    <article className='Testimonials'>
            <h1>Testimonials</h1>
            <div className='Testimonials-container'>

            {console.log(props.testimonials)}
            {props.testimonials.map((item , index) => (
                <section className='review'>
                    <img className='ratings' src={item.ratingImg}></img><br/>
                    <div className='person-identity'>
                        <img className='person' src={item.personImg}></img>
                        <h3 >{item.name}</h3>
                    </div>
                    <p >{item.review}</p>
                </section>
            ))}

            
            </div><br/>
        </article>
  )
}

export default CustomerSay