import React from 'react'
import Bruchetta from '../images/bruchetta.svg'
import GreekSalad from '../images/greek salad.jpg'
import Lemon from '../images/Lemon.jpg'
import DeliveryBike from '../images/delivery.png'
import Macaroni from '../images/Macaroni.jpg'
const Specials = (props) => {
  return (
    <>
        <section className='highlights'>
            <h2>Special</h2>
            <button type='button'>Order Online</button>
        </section>
        <article className='highlights-container'>
        {props.specialItems.map((item, index) => (
            <section className='highlights-section' key={index}>
                <img className="specialImg" src={item.img} alt={item.dishName} />
                <div className={`section main${item.id}`}>
                    <h4 style={{ color: 'black' }}>{item.dishName}</h4>
                    <h4>{item.price}</h4>
                </div>
                <p>{item.description}</p>
                <div className='delivery-Icon'>
                    <h5>Order a Delivery</h5>
                    <img src={item.footerImg} className='deliveryBike' alt={item.footer} />
                </div>
            </section>
        ))}
            </article>
       
    </>
    
  )
}

export default Specials