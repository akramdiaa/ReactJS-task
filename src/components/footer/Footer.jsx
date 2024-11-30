import React from 'react'
import Social from './socials/Social';
import './Footer.scss';
import AppShortCuts from './appshortcuts/AppShortCuts';
import dummyicon from '../../assets/svg/dummyicon.svg';
const Footer = () => {
  return (
    <div className="footer-container">
          <img src={dummyicon} alt="logo" />
          <AppShortCuts />
          <Social />
    </div>
  )
}

export default Footer