import React from 'react';

import styles from './Input.module.css';
import SendIcon from '../../icons/sendIcon.png';

const Input = ({ setMessage, sendMessage, message }) => (
    <form className={styles.form}>
        <input
        className={styles.input}
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <img className={styles.sendButton} onClick={e => sendMessage(e)} src={SendIcon} alt="send icon"/>
    </form>
)

export default Input;