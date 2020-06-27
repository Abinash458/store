import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Navbar.module.scss';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4'

import logo from './assets/logo2.jpg';

const Navbar = (props) => {
    const themeMode = window.localStorage.getItem('theme');
    return (
        <div>
            <header>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>
                {/* <nav>
                    <ul className={styles.nav__links}>
                        <li><a href="signup">SignUp</a></li>
                        <li><a href="login">Login</a></li>
                    </ul>
                </nav> */}
                <div className={styles.right_nav_items}>
                    {
                        themeMode === "dark" ?
                            <Brightness7Icon style={{ fontSize: 35, cursor: 'pointer' }} onClick={() => props.themeChange('light')} color="disabled"/>

                        :
                            <Brightness4Icon style={{ fontSize: 35, cursor: 'pointer' }} onClick={() => props.themeChange('dark')} color="disabled"/>
                    }
                    <Link to="/cart">
                        <button className="ml-3"><i class="fas fa-cart-plus" />my cart</button>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
