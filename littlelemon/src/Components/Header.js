import React, { Component } from 'react'

import Logo from '../images/Logo.svg'
export class Header extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: "red" }}>
       <img src={Logo} alt='Logo'></img>
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
      </nav>
    )
  }
}

export default Header