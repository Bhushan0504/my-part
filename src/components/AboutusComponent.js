import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Aboutus(props) {
    return(
        <div className="container">
            <Header clients={props.clients}/>
            <h4> About us</h4>
        </div>
    );
}

export default Aboutus;