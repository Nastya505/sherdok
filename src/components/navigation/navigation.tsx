import React from 'react';
import NavigationLink from './navigationLink';
import styles from './navigation.module.css';
import { IoMenu } from "react-icons/io5";

const Navigation = () => {
    return (
        <>
            <IoMenu className={styles.iconMenu}/>
            <div className={styles.navigation}>
                <NavigationLink title="Как мы работаем?"/>
                <NavigationLink title="О компании"/>
                <NavigationLink title="Оформить заявку"/>
                <NavigationLink title="Контакты"/>
            </div>
        </>
    );
};

export default Navigation;