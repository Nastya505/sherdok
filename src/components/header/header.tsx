import React from 'react';
import logo from '../../images/logo.svg';
import styles from './header.module.css';
import Navigation from '../navigation/navigation';

const Header = () => {
    return (
        <div className="container">
            <div className={`${styles.wrapper} mt-12 mb-12`}>
                <img src={logo} alt="logo" />
                <Navigation />
            </div>
        </div>
    );
};

export default Header;