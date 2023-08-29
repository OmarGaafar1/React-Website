import React from 'react'
import Restaurant from '../images/restaurant.jpg'
const Footer = () => {
  return (
    <article className='Footer'>
        <img src={Restaurant} alt='Restaurant Image'></img>
        <ul>
          <h4>Links</h4>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Menu</a>
          </li>
          <li>
            <a href=''>Reservation</a>
          </li>
          <li>
            <a href=''>Order online</a>
          </li>
          <li>
            <a href=''>Login</a>
          </li>
       </ul>

       <ul>
        <h4>Contact</h4>
          <li>
            <a href=''>Address</a>
          </li>
          <li>
            <a href=''>Phone</a>
          </li>
          <li>
            <a href=''>Email</a>
          </li>
       </ul>


       <ul>
        <h4>Social Media Links</h4>
          <li>
            <a href=''>Facebook</a>
          </li>
          <li>
            <a href=''>Instgram</a>
          </li>
          <li>
            <a href=''>Twitter</a>
          </li>
       </ul>


    </article>
  )
}

export default Footer