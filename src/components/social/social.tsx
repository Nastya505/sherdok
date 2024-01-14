import React from 'react';
import SocialItem from './socialItem';
import styles from './social.module.css';

const Social = () => {
    return (
        <div className={styles.social}>
            <SocialItem title="Telegram"/>
            <SocialItem title="WhatsApp"/>
        </div>
    );
};

export default Social;