import React from 'react';
import './index.scss';

/**
 * Search component.
 */
export default class Search extends React.Component {
    /**
     * @property {number}
     * Submit key code (enter).
     */
    SUBMIT_KEY = 13;

    /**
     * Search field component constructor.
     */
    constructor (props) {
        super(props);

        this.state = { value: this.props.value || '' }
    }

    /**
     * On input value change event handler.
     * @param {SyntheticKeyboardEvent} event Event object.
     */
    onChange (event) {
        this.setState({ value: event.target.value });
    }

    /**
     * On key up event handler.
     * @param {SyntheticKeyboardEvent} event Keyboard event object.
     */
    onKeyUp (event) {
        if (event.keyCode === this.SUBMIT_KEY) {
            this.props.onSearch(this.state.value)
        }
    }

    render () {
        return (
            <input
                name="Search"
                className="Search"
                value={ this.state.value }
                placeholder={ this.props.placeholder }
                onChange={ this.onChange.bind(this) }
                onKeyUp={ this.onKeyUp.bind(this) }
            />
        )
    }
}