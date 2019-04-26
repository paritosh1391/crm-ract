import React from 'react';
import '../index.css';

class Payment extends React.Component {
    render() {
        return (
        <form className="order-entry-form">
            <header className="billing-header">
                <h3>Payment Details</h3>
            </header>
            <div className="form-row clearfix">
                <div className="form-group left">
                    <label>Select Payment Mode :</label>
                    <select className="form-control">
                        <option>Cash</option>
                        <option>Cheque/ DD</option>
                        <option>Online</option>
                    </select>
                </div>
            </div>
            <div className="payment-wrap">
                <div className="form-row clearfix">
                    <div className="form-group left">
                        <label className="mode">Recipt No. :</label>
                        <input type="text" className="form-control" value="2147483647" />
                    </div>
                    <div className="form-group right">
                        <label>Amount :</label>
                        <input type="text" className="form-control" value="41300" />
                    </div>
                </div>
                <div className="form-row clearfix">
                    <div className="form-group left">
                    <label>Date :</label>
                    <input type="text" className="form-control" value="2018-05-06"/>
                    </div>
                    <div className="form-group right bank">
                    <label>Drawn Bank :</label>
                    <input type="text" className="form-control" value=""/>
                    </div>
                </div>
            </div>
            <div className="form-row button-wrap">
                <a href="order-entry-3.html" className="login-btn">move to step 4</a>
                <button type="button" className="login-btn">reject</button>
            </div> 
        </form>
        )
    }
}

export default Payment;