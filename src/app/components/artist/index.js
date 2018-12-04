import React from 'react';
import List from '../list';
import Event from '../event';
import './index.scss';

/**
 * Input component.
 */
export default (props) => (
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