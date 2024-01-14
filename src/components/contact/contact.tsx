import React from 'react';
import styles from './contact.module.css';
import ContactItem from './contactItem';
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className="container">
                <div className={styles.wrapper}>
                    <ContactItem title="+7 (999) 999-99-99" icon={<FiPhone className={styles.icon}/>}/>
                    <ContactItem title="sherdok@mail.ru" icon={<FaRegEnvelope className={styles.icon}/>}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;