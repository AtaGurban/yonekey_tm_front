import React from 'react';
import logo from '../yone.png'

const MainNavbar = () => {
    return (
        <div className='navbar-main container d-flex justify-content-between align-items-center'>
            <div className='navbar-logo d-flex align-items-center'><img src={logo} alt='' /></div>
            <div className='ms-4 navbar-logo-icons d-flex align-items-center'>
                <a href='https://sowda.yonekey.com/register'><i className="ms-3 fas fa-user"></i></a> 
                <a href='https://sowda.yonekey.com/orders/tracking'><i className="ms-3 fas fa-shopping-cart"></i></a>      
            </div>
        </div>
    );
};

export default MainNavbar;