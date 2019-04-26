import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class Aside extends React.Component {
    render() {
        return (
            <aside className="main-menu">
            <nav className="main-nav">
                <ul>
                    <li>
                        <a href="#">Rights Management</a>
                    </li>
                    <li>
                        <a href="#">Masters</a>
                    </li>
                    <li>
                        <a href="#">BMS</a>
                    </li>
                    <li>
                        <a href="#">OMS</a>
                        <div className="menu-level-2">
                            <ul>
                                <li><a href="#">Opportunity</a></li>
                                <li><a href="#">All Leads</a></li>
                                <li><a href="#">Manage Lead Provisioning</a></li>
                                <li><a href="#">Change Request</a></li>
                                <li><a href="#">All Orders</a></li>
                                <li><a href="#">Reports</a></li>
                                <li><a href="#">Lead Report</a></li>
                                <li><a href="#">Branch Wise Report</a></li>
                                <li><a href="#">Order Report</a></li>
                                <li><a href="#">Network Document</a></li>
                                <li><a href="#">All Canceled Leads</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
        )
    }
}

export default Aside;