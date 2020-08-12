import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

import styles from './Chat.module.css';
import InfoBar from '../InfoBar/InfoBar';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:4000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });
        
        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = e => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <div className={styles.OuterContainer}>
            <div className={styles.container}>
                <InfoBar room={room}/>
                {/* <input 
                    value={message} 
                    type="text"
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}/> */}
            </div>
        </div>
    );
};

export default Chat;