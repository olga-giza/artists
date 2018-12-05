import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Message box.
 */
const Message = (props) => (
    <div className="Message">{props.text}</div>
);

Message.propTypes = {

    /**
     * Message text.
     */
    text: PropTypes.string.isRequired,
};

export default Message;