import React from 'react';
import PropTypes from 'prop-types';
import Message from '../message';
import './index.scss';

/**
 * List component.
 */
const List = (props) => (
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

List.propTypes = {
    /**
     * Result set to display on list.
     */
    data: PropTypes.array,

    /**
     * Text for empty result set.
     */
    emptyText: PropTypes.string.isRequired,

    /**
     * List item renderer.
     */
    itemRenderer: PropTypes.func.isRequired,
};

export default List;