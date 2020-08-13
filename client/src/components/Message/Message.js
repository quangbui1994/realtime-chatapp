import React from 'react';
import cx from 'classnames';
import ReactEmoji from 'react-emoji';

import styles from './Message.module.css';

const upperCaseFirstLetter = text => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * The function renders the messages based on the owner
 */
const Message = React.memo(({ message: { text, user }, name }) => {
  let isSentByCurrentUser = user === name.trim().toLowerCase();

  return (
    isSentByCurrentUser
      ? (
        <div className={cx(styles.messageContainer, styles.justifyEnd)}>
          <p className={cx(styles.sentText, styles.pr10)}>{name}</p>
          <div className={cx(styles.messageBox, styles.backgroundBlue)}>
            <p className={cx(styles.messageText, styles.colorWhite)}>{ReactEmoji.emojify(upperCaseFirstLetter(text))}</p>
          </div>
        </div>
        )
        : (
          <div className={cx(styles.messageContainer, styles.justifyStart)}>
            <div className={cx(styles.messageBox, styles.backgroundLight)}>
              <p className={cx(styles.messageText, styles.colorDark)}>{ReactEmoji.emojify(upperCaseFirstLetter(text))}</p>
            </div>
            <p className={cx(styles.sentText, styles.pl10)}>{user}</p>
          </div>
        )
  );
});

export default Message;