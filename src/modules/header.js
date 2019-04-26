import React from 'react';
import Logo from '../assets/images/logo.png';
import '../index.css';



class Header extends React.Component {
  render() {
    return (
      <header className="header header-inner clearfix">
        <div className="logo ">
          <a href="#">
            <img alt="Logo" src={Logo} alt="" />
          </a>
        </div>
        <div className="oms">
          <h3>SMART <span>ILL</span></h3>
        </div>
      </header>
      )
    }
  }
  
  export default Header;
  