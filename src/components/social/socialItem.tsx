import React, { FC } from 'react';
import styles from './social.module.css';

interface SocialItemProps {
    title: string;
}

const SocialItem: FC< SocialItemProps> = ({title}) => {
    return (
        <a href='#' className={styles.link}>{title}</a>
    );
};

export default SocialItem;