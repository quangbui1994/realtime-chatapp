import React from 'react';
import cx from 'classnames';
import ReactEmoji from 'react-emoji';
import PropTypes from 'prop-types';

import styles from './Message.module.css';

/**
 * The function capitalizes the first letter of passed text
 * @param {String} text The value of text passed into
 */
const upperCaseFirstLetter = text => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * The function renders the messages based on the owner
 */
const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = user === name.trim().toLowerCase();

  return (
    isSentByCurrentUser
      ? (
        <div data-test="message-container-component" className={cx(styles.messageContainer, styles.justifyEnd)}>
          <p data-test="name-component" className={cx(styles.sentText, styles.pr10)}>{name}</p>
          <div className={cx(styles.messageBox, styles.backgroundBlue)}>
            <p data-test="message-component" className={cx(styles.messageText, styles.colorWhite)}>{ReactEmoji.emojify(upperCaseFirstLetter(text))}</p>
          </div>
        </div>
        )
        : (
          <div data-test="message-container-component" className={cx(styles.messageContainer, styles.justifyStart)}>
            <div className={cx(styles.messageBox, styles.backgroundLight)}>
              <p data-test="message-component" className={cx(styles.messageText, styles.colorDark)}>{ReactEmoji.emojify(upperCaseFirstLetter(text))}</p>
            </div>
              <p data-test="name-component" className={cx(styles.sentText, styles.pl10)}>{name}</p>
          </div>
        )
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.string,
  }),
  name: PropTypes.string,
}

export default Message;