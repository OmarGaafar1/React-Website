import React, { Component } from 'react'

import Logo from '../images/Logo.svg'
export class Header extends Component {
  render() {
    return (
      <nav className='nav-container'>
       <img src={Logo} alt='Logo'></img>
       <ul className='nav-list'>
          <li className='nav-list-item'>
            <a href=''>HOME</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>ABOUT</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>MENU</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>RESERVATION</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>ORDER ONLINE</a>
          </li>
          <li className='nav-list-item'>
            <a href=''>LOGIN</a>
          </li>
       </ul>
      </nav>
    )
  }
}

export default Header