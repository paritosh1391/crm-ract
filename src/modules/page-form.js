import React from 'react';
import { Route } from "react-router-dom";
import Payment from './payment.js';
import Breadcrumb from './breadcrumb.js';
import PageNav from './page-nav.js';
import Product from './product.js';
import Order from './order.js';
import Document from './document.js';
import '../index.css';


class PageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkVal : Product
        }
    }

    handleClick = (event) => {
        //alert('hello');
        const linkVal = event.target.textContent;
        //alert(linkVal);
        this.setState({linkVal: linkVal});
    }

    render() {
        return (
            <div className="main-content">
                <Breadcrumb value={this.state.linkVal   } />
                <div className="content-wrapper">
                    <PageNav onClick={event => this.handleClick(event)} />
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