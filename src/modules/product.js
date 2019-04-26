import React from 'react';
import '../index.css';

class Product extends React.Component {
    render() {
        return (
            <form class="order-entry-form">
            <header class="billing-header">
                <h3>Product Details</h3>
            </header>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <header class="block-head small-block">
                        <h4>STP Charge</h4>
                    </header>
                    <div class="form-group left">
                        <label>List Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group right">
                        <label>Order Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-group right">
                    <header class="block-head small-block">
                        <h4>Reccurring Charge</h4>
                    </header>
                    <div class="form-group left">
                        <label>List Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group right">
                        <label>Order Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <header class="block-head small-block">
                        <h4>Franchise OTC</h4>
                    </header>
                    <div class="form-group left">
                        <label>List Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group right">
                        <label>Order Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-group right">
                    <header class="block-head small-block">
                        <h4>Misc OTC</h4>
                    </header>
                    <div class="form-group left">
                        <label>List Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group right">
                        <label>Order Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <header class="block-head small-block">
                        <h4>Security Deposite</h4>
                    </header>
                    <div class="form-group left">
                        <label>List Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group right">
                        <label>Order Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group full-length">
                    <header class="block-head small-block">
                        <h4>Sub Total</h4>
                    </header>
                    <div class="form-group left">
                        <label>List Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group right">
                        <label>Order Price :</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>
            <div class="form-row button-wrap">
                <a href="order-entry-3.html" class="login-btn">move to step 3</a>
                <button type="button" class="login-btn">reject</button>
            </div> 
        </form>
        )
    }
}

export default Product;