import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './Join.module.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className={styles.JoinOuterContainer}>
            <div className={styles.joinInnerContainer}>
                <h1 className={styles.heading}>Join</h1>
                <div><input placeholder="Name" className={styles.joinInput} type="text" onChange={e => setName(e.target.value)}/></div>
                <div><input placeholder="Room" className={styles.joinInput} type="text" onChange={e => setRoom(e.target.value)}/></div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className={cx(styles.button, styles.mt20)} type="button">Join</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;