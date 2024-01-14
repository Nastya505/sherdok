import React, {FC} from 'react';
import styles from './button.module.css';
interface ButtonProps {
    text: string;
}
const Button: FC<ButtonProps> = ({text}) => {
    return (
        <a className={styles.button} href='#'>{text}</a>
    );
};

export default Button;