import React from 'react';
import PropTypes from 'prop-types';
import { getDate, getDayOfWeek } from '../../util/date';
import './index.scss';

/**
 * Event component.
 */
const Event = (props) => (
    <div className="Event">
        <span className="Event-name">{ props.name }</span>
        <span className="Event-time">{ getDayOfWeek(props.date) }</span>
        <span className="Event-location">{ props.city + ', ' + props.country }</span>
        <span className="Event-date">{ getDate(props.date) }</span>
    </div>
);

Event.propTypes = {

    /**
     * Event name.
     */
    name: PropTypes.string.isRequired,

    /**
     * Location country.
     */
    country: PropTypes.string.isRequired,

    /**
     * Location city.
     */
    city: PropTypes.string.isRequired,

    /**
     * Date in string.
     */
    date: PropTypes.string.isRequired,
};

export default Event;