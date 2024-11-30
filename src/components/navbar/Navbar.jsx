import React from 'react';
import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import UserSetting from './usersetting/UserSetting';
import './Navbar.scss';
import DateWeather from './datetime/DateWeather';
import logo from '../../assets/svg/logo.svg';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" className="navbar">
      <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row' }}>
        <img 
          src={logo} 
          alt="Logo" 
          className="logo" 

        />
        <DateWeather />
        <UserSetting />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;