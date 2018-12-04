import React from 'react';
import { getDate, getDayOfWeek } from '../../util/date';
import './index.scss';

/**
 * Event component.
 */
export default (props) => (
    <div className="Event">
        <span className="Event-name">{ props.name }</span>
        <span className="Event-time">{ getDayOfWeek(props.date) }</span>
        <span className="Event-location">{ props.city + ', ' + props.country }</span>
        <span className="Event-date">{ getDate(props.date) }</span>
    </div>
);