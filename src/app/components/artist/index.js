import React from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import Event from '../event';
import './index.scss';

/**
 * Input component.
 */
const Artist = (props) => (
    <div className="Artist">
        <div className="Artist-cover">
            <img src={ props.cover } alt={ props.name } />
        </div>
        <div className="Artist-header">
            <h1>{ props.name }</h1>
        </div>
        <div className="Artist-website">
            <a href={ props.url } rel="noopener noreferrer" target="_blank">
                Go to the facebook page.
            </a>
        </div>
        <div className="Artist-events">
            <div className="Artist-events-header">
                <h2>Upcoming events</h2>
            </div>
            <List emptyText="No events upcoming" data={ props.events } itemRenderer={(event) => (
                <Event { ...event }/>
            )}/>
        </div>
    </div>
);

Artist.propTypes = {

    /**
     * Cover image.
     */
    cover: PropTypes.string.isRequired,

    /**
     * Artist name.
     */
    name: PropTypes.string.isRequired,
    /**
     * Website URL.
     */
    url: PropTypes.string.isRequired,

    /**
     * Events list if any planned.
     */
    events: PropTypes.array,
};

export default Artist