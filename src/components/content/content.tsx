import React from 'react';
import hero from '../../images/hero.svg';
import styles from './content.module.css';
import Button from '../button/button';
import Social from '../social/social';

const Content = () => {
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <div className={styles.info}>
                        <div className={styles.content}>
                            <div className="text-extra-big">помогаем клиникам и пациентам найти друг друга</div>
                            <div className={`${styles.text} text-regular`}>Бесплатное лечение по полису ОМС еще никогда не было таким простым и удобным!</div>
                        </div>
                        <Button text="Оформить заявку на сайте"/>
                    </div>
                    <Social />
                </div>
                <img className={styles.img} src={hero} />
            </div>
        </div>
    );
};

export default Content;