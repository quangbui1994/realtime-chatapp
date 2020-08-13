import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import styles from './Messages.module.css';
import Message from '../Message/Message';

const Messages = React.memo(({ messages, name }) => {
  return (
    <ScrollToBottom className={styles.messages}>
      {messages.map((message, i) => <Message key={i} message={message} name={name}/>)}
    </ScrollToBottom>
)
});

export default Messages;