import React from 'react';
import { NavLink } from "react-router-dom";
import '../index.css';

class PageNav extends React.Component {
    render() {
        return (
          
            <ul className="steps">
              <li onClick={(event) => this.props.onClick(event)}>
                <NavLink to="/">Product</NavLink>
              </li>
              <li onClick={(event) => this.props.onClick(event)}>
                <NavLink to="/payment">Payment</NavLink>
              </li>
              <li onClick={(event) => this.props.onClick(event)}>
                <NavLink to="/order">Order</NavLink>
              </li>
              <li onClick={(event) => this.props.onClick(event)}> 
                <NavLink to="/document">Document</NavLink>
              </li>
            </ul>
          )
        }
      }

      export default PageNav;

