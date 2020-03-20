import React from 'react';
import logo from '../../images/logo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {useAuth} from '../Login/useAuth';
import './Header.css';
const Header = () => {
    const auth = useAuth();

    return(
    <div className="header">
       <img src={logo} alt=""/>
       <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            {
                auth.user ? <Link to="/login">{auth.user.name}</Link>: <Link to="/login">Login</Link>
            }
            
       </nav>
    </div>
    )
}

export default Header;