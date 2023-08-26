import React from 'react'
import Restaurant from '../images/restaurant.jpg'
const Footer = () => {
  return (
    <article>
        <img src={Restaurant} alt='Restaurant Image'></img>
        <ul>
          <li>
            <a href=''>HOME</a>
          </li>
          <li>
            <a href=''>ABOUT</a>
          </li>
          <li>
            <a href=''>MENU</a>
          </li>
          <li>
            <a href=''>RESERVATION</a>
          </li>
          <li>
            <a href=''>ORDER ONLINE</a>
          </li>
          <li>
            <a href=''>LOGIN</a>
          </li>
       </ul>

       <ul>
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


    </article>
  )
}

export default Footer