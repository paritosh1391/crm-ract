import React from 'react';
import { Route } from "react-router-dom";
import Breadcrumb from './breadcrumb.js';
import PageNav from './page-nav.js';
import Payment from './payment.js';
import Product from './product.js';
import Order from './order.js';
import Document from './document.js'
import '../index.css';

class PageForm extends React.Component {
    render() {
        return (
            <div className="main-content">
                <Breadcrumb />
                <div className="content-wrapper">
                    <PageNav />
                    <div className="page-form">
                        <Route exact path="/" component={Product}/>
                        <Route path="/payment" component={Payment}/>
                        <Route path="/order" component={Order}/>
                        <Route path="/document" component={Document}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageForm;