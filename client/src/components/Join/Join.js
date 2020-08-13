import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Join.module.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [error, setError] = useState('');

    const errorHandler = e => {
        e.preventDefault();
        setError('You need to fill in the name and room');
        setTimeout(() => {
            setError('');
        }, 2500);
    };

    return (
        <div className={styles.JoinOuterContainer}>
            <div className={styles.joinInnerContainer}>
                <h1 className={styles.heading}>Join</h1>
                <div><input placeholder="Name" className={styles.joinInput} type="text" onChange={e => setName(e.target.value)}/></div>
                <div><input placeholder="Room" className={styles.joinInput} type="text" onChange={e => setRoom(e.target.value)}/></div>
                <Link onClick={e => (!name || !room) ? errorHandler(e) : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className={styles.button} type="button">Join</button>
                </Link>
                {error && <p className={styles.error}>{error}</p>}
            </div>
        </div>
    );
};

export default Join;