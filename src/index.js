import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './modules/header.js';
import MainContent from './modules/main-content.js';
import './index.css';

class MyApp extends React.Component {
    render() {
      return (
        <div id="wrapper">
            <Header />
            <MainContent />
        </div>
      );
    }
  }

ReactDOM.render(
  <BrowserRouter>
    <MyApp />
    </BrowserRouter>,
    document.getElementById('root')
);
    
    