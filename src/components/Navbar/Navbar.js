import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
// import { Icon } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4'

import logo from './assets/logo2.jpg';

const Navbar = (props) => {
    const themeMode = window.localStorage.getItem('theme');
    return (
        <div>
            <header>
                <img className={styles.logo} src={logo} alt="logo" />
                {/* <nav>
                    <ul className={styles.nav__links}>
                        <li><a href="signup">SignUp</a></li>
                        <li><a href="login">Login</a></li>
                    </ul>
                </nav> */}
                <div>
                    {
                        themeMode === "dark" ?
                            <Brightness7Icon style={{ fontSize: 35, cursor: 'pointer' }} onClick={() => props.themeChange('light')} color="disabled"/>

                        :
                            <Brightness4Icon style={{ fontSize: 35, cursor: 'pointer' }} onClick={() => props.themeChange('dark')} color="disabled"/>
                    }
                </div>
            </header>
        </div>
    );
}

export default Navbar;
