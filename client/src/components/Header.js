import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link 
                to='/'
                className="navbar-brand"
            >
                Canada Post Shipping Calculator
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-md-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.canadapost.ca/cpo/mc/business/productsservices/developers/services/fundamentals.jsf">Canada Post API Docs</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}