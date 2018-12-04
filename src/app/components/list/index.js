import React from 'react';
import Message from '../message';
import './index.scss';

/**
 * List component.
 */
export default (props) => (
    <div className="List">
        { Array.isArray(props.data) && props.data.length ? (
            <ul className="List-container">
                { props.data.map((item, idx) => (
                    <li className="List-item" key={ item.id || idx}>
                        { props.itemRenderer(item) }
                    </li>
                ))}
            </ul>
        ) : (
            <Message text={ props.emptyText }/>
        )}
    </div>
);
