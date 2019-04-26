import React from 'react';  
import { NavLink } from "react-router-dom";
import '../index.css';

class PageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        linkVal : null
    }
}

handleClick(event) {
    let linkVal = event.target.textContent;
    alert(linkVal);
    this.setState({linkVal: linkVal});
}
  render() {
    return (
      
        <ul className="steps">
          <li  onClick={(event) => this.handleClick(event)}>
            <NavLink to="/">Product</NavLink>
          </li>
          <li  onClick={(event) => this.handleClick(event)}>
            <NavLink to="/payment">Payment</NavLink>
          </li>
          <li  onClick={(event) => this.handleClick(event)}>
            <NavLink to="/order">Order</NavLink>
          </li>
          <li  onClick={(event) => this.handleClick(event)}> 
            <NavLink to="/document">Document</NavLink>
          </li>
        </ul>
      )
    }
  }
  
  export default PageNav;