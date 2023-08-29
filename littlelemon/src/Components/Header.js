import React, { Component } from 'react'

import Logo from '../images/Logo.svg'
export class Header extends Component {
  render() {
    return (
      <nav className='nav-container'>
       <img src={Logo} alt='Logo'></img>
       <ul className='nav-list'>
          <li className='nav-list-item'>
            <a href=''>Home</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>About</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>Menu</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>Reservation</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>Order online</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>Login</a>
          </li>
       </ul>
      </nav>
    )
  }
}

export default Header