import React from 'react';
import '../index.css';

class Document extends React.Component {
    render() {
        return (
            <form class="order-entry-form">
                    <header class="billing-header">
                        <h3>Documents Detail</h3>
                    </header>
                    <div class="form-row clearfix">
                        <div class="form-group left">
                            <label>CRF :</label>
                            <span class="file-ui"><strong>Click Here</strong> To Upload</span>
                            <input type="file" class="file-control form-control" />
                        </div>
                        <div class="form-group right">
                            <label>ID Proof :</label>
                            <span class="file-ui"><strong>Click Here</strong> To Upload</span>
                            <input type="file" class="file-control form-control" />
                        </div>
                    </div>
                    <div class="form-row clearfix">
                        <div class="form-group left">
                            <label>MOA/ Partnership Deed :</label>
                            <span class="file-ui"><strong>Click Here</strong> To Upload</span>
                            <input type="file" class="file-control form-control" />
                        </div>
                        <div class="form-group right">
                            <label>PAN Card :</label>
                            <span class="file-ui"><strong>Click Here</strong> To Upload</span>
                            <input type="file" class="file-control form-control" />
                        </div>
                    </div>
                    <div class="form-row clearfix">
                        <div class="form-group left">
                            <label>POA :</label>
                            <span class="file-ui"><strong>Click Here</strong> To Upload</span>
                            <input type="file" class="file-control form-control" />
                        </div>
                        <div class="form-group right">
                            <label>Purchase Order :</label>
                            <span class="file-ui"><strong>Click Here</strong> To Upload</span>
                            <input type="file" class="file-control form-control" />
                        </div>
                    </div>
                    <div class="form-row button-wrap">
                        <a href="order-entry-3.html" class="login-btn">submit</a>
                        <button type="button" class="login-btn">reject</button>
                    </div> 
                </form>
        )
    }
}

export default Document;