import React from 'react';
import Aside from './aside.js';
import PageForm from './page-form.js';
import '../index.css';

class MainContent extends React.Component {
    render() {
        return (
            <div id="content">
                <Aside />
                <PageForm />
            </div>
            
        )
    }
}

export default MainContent;