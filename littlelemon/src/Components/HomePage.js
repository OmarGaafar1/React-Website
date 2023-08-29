import React from 'react'
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import Specials from './Specials'
import CustomerSay from './CustomerSay';

import Bruchetta from '../images/bruchetta.svg'
import GreekSalad from '../images/greek salad.jpg'
import Lemon from '../images/Lemon.jpg'
import DeliveryBike from '../images/delivery.png'
import ratings from '../images/rating.png'
import Macaroni from '../images/Macaroni.jpg'


import Review1 from '../images/Review1.jpg'
import Review2 from '../images/Review2.jpg'
import Review3 from '../images/Review3.jpg'
import Review4 from '../images/Review4.jpg'
const Testimonials = [
  {
    ratingImg:ratings,
    personImg:Review1,
    name:'Ahmed Ali',
    review:'Excellent restaurant Great food'
  },
  {
    ratingImg:ratings,
    personImg:Review2,
    name:'Mai Khaled',
    review:'little busy, but overall great restaurant'
  },
  {
    ratingImg:ratings,
    personImg:Review3,
    name:'Omar Loay',
    review:'Very Good'
  },
  {
    ratingImg:ratings,
    personImg:Review4,
    name:'M. Gaafar',
    review:'Excellent restaurant'
  },
]
const SpecialItems = [
  {
    id:1,
    img:Bruchetta,
    dishName:"Bruchetta",
    price:"$6.99",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    footer:"Order A Delivery",
    footerImg:DeliveryBike
  },
  {
    id:2,
    img:GreekSalad,
    dishName:"Greek Salad",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    footer:"Order A Delivery",
    footerImg:DeliveryBike
  },
  {
    id:3,
    img:Lemon,
    dishName:"Lemon Dessert",
    price:"$3.99",
    description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    footer:"Order A Delivery",
    footerImg:DeliveryBike
  },
  {
    id:4,
    img:Macaroni,
    dishName:"Macaroni",
    price:"$8.99",
    description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    footer:"Order A Delivery",
    footerImg:DeliveryBike
  },
]

const HomePage = () => {
  return (
    <>
    <Header/>
    <Main/>
    <Specials specialItems={SpecialItems}/>
    <CustomerSay testimonials={Testimonials}/>
    <Footer/>
    </>
  )
}

export default HomePage