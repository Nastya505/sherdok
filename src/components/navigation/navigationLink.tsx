import React, {FC} from 'react';
import styles from './navigation.module.css';
interface NavigationLinkProps {
    title: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({title}) => {
    return (
        <a href="#" className={styles.link}>{title}</a>
    );
};

export default NavigationLink;