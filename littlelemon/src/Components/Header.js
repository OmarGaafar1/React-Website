import React, { Component } from 'react'
import Main from './Main'
import Footer from './Footer'
import Logo from '../images/Logo.svg'
import { BrowserRouter as Router, Route, Link  , Routes} from "react-router-dom";


export class Header extends Component {
  render() {
    return (
      <nav className='nav-container'>
       <img src={Logo} alt='Logo'></img>
       <ul className='nav-list'>
          
          <li className='nav-list-item'>
          <Link>Home</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-list-item'>
          <Link to='/contact'>About</Link>
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