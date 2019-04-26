import React from 'react';
import '../index.css';

class Order extends React.Component {
    render() {
        return (
            <form class="order-entry-form">
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Customer / Company Name :</label>
                    <input type="text" class="form-control" /> 
                </div>
                <div class="form-group right">
                    <label>PAN Number :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>CRF Scan Copy :</label>
                    <span class="file-ui"><strong>Click Here</strong> To Upload</span>
                    <input type="file" class="file-control" />
                </div>
                <div class="form-group right">
                    <label>National ID Number :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>CRF Number :</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group right">
                    <label>VAT Registration Number :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Trade License Number :</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group right">
                    <label>Tax Registration Number :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Demo Required :</label>
                    <div class="radio-wrap">
                        <div class="radio-group">
                            <input type="radio" id="yes" name="demo" />
                            <span class="radio-ui"></span>
                            <label for="yes">Yes</label>
                        </div>
                        <div class="radio-group">
                            <input type="radio" id="no" name="demo" />
                            <span class="radio-ui"></span>
                            <label for="no">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Order Pickup Date :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Channel Partner :</label>
                    <div class="radio-wrap">
                        <div class="radio-group">
                            <input type="radio" id="c-yes" name="channel" />
                            <span class="radio-ui"></span>
                            <label for="c-yes">Yes</label>
                        </div>
                        <div class="radio-group">
                            <input type="radio" id="c-no" name="channel" />
                            <span class="radio-ui"></span>
                            <label for="c-no">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Name Of The Authorized Signatory :</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group right">
                    <label>Designation :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Registered Office Of The Company :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <header class="billing-header">
                <h3>Billing Address</h3>
            </header>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Contact Person :</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group right">
                    <label>Phone Number :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Address :</label>
                    <textarea class="form-control"></textarea>
                </div>
                <div class="form-group right">
                    <label>Mobile Number :</label>
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>Location :</label>
                    <select class="form-control">
                        <option>Gurgaon</option>
                        <option>New Delhi</option>
                        <option>Noida</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                    </select>
                </div>
                <div class="form-group right">
                    <label>Email :</label>
                    <input type="email" class="form-control" />
                </div>
            </div>
            <div class="form-row clearfix">
                <div class="form-group left">
                    <label>PIN :</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group right">
                    <label>Billing Branch :</label>
                    <select class="form-control">
                        <option>Gurgaon</option>
                        <option>New Delhi</option>
                        <option>Noida</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                    </select>
                </div>
            </div>
            <div class="form-row button-wrap">
                <a href="order-entry-2.html" class="login-btn">move to step 2</a>
                <button type="button" class="login-btn">reject</button>
            </div>
        </form>
        )
    }
}

export default Order;