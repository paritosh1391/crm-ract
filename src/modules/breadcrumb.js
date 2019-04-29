import React from 'react';
import '../index.css';


class Breadcrumb extends React.Component {
    render() {
      return (
        <ul className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">OMS</a></li>
          <li><a href="#">ALL Leads</a></li>
          <li>{this.props.value}</li>
        </ul>
        )
      }
}

export default Breadcrumb;

