import React from 'react';

import OnlineIcon from '../../icons/onlineIcon.png';
import CloseIcon from '../../icons/closeIcon.png';
import styles from './InfoBar.module.css';

const InfoBar = ({ room }) => (
    <div className={styles.InfoBar}>
        <div className={styles.leftInnerContainer}>
            <img className={styles.onlineIcon} src={OnlineIcon} alt="online"/>
            <h3>{room}</h3>
        </div>
        <div className={styles.rightInnerContainer}>
            <a href="/"><img src={CloseIcon} alt="close"/></a>
        </div>
    </div>
);

export default InfoBar;