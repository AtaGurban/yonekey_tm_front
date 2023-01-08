import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../..';
import logo from '../yone.png'

const MainNavbar = observer(() => {
    const { user } = useContext(Context);
    return (
        <div className='navbar-main container d-flex justify-content-between align-items-center'>
            <div className='navbar-logo d-flex align-items-center'><img src={logo} alt='' /></div>
            <div className='ms-4 navbar-logo-icons d-flex align-items-center'>
                {!(user.isAuth) && <Link to={'/login'}><i className="ms-3 fas fa-user"></i></Link> }
                {(user.user.role === "SUPERADMIN" || user.user.role === "ADMIN") && <Link to={'/admin'}><i className="ms-3 fas fa-user"></i></Link>} 
                {/* <Link href='https://sowda.yonekey.com/register'><i className="ms-3 fas fa-user"></i></Link>  */}
                <a href='https://sowda.yonekey.com/orders/tracking'><i className="ms-3 fas fa-shopping-cart"></i></a>      
            </div>
        </div>
    );
});

export default MainNavbar;