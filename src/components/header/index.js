import React from 'react'
import './header.css';
import { BsInstagram } from "react-icons/bs";

const Header = () => {
  return (
    <div className='header-container'>
    <img  className='logo'
    src='https://d1hzl1rkxaqvcd.cloudfront.net/contest_entries/2099580/_600px/7325f77640c92dc603394adcdb428b5c.jpg'  alt=''/>
      <nav className='header-nav'>
        <ul>
        <BsInstagram />

            <li> <a href='https://www.instagram.com/serkandemir.2/' target='_blank'></a>
            <h4>Instagram</h4>
            </li>
            <li> <a href='https://twitter.com/serkandemir04' target='_blank'>Twiter</a></li>
            <li> <a href='mail:serkandemir@gmail.com' target='_blank'>Email</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
