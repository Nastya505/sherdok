import React, { FC } from 'react';
import styles from './contact.module.css';

interface ContactItemProps {
    title: string;
    icon: any;
}

const ContactItem: FC<ContactItemProps> = ({title, icon}) => {
    return (
            <div className={`${styles.item} mt-4 mb-4`}>
                {icon}
                <div className={styles.title}>{title}</div>
            </div>
    );
};

export default ContactItem;