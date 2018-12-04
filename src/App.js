import React from 'react';
import { fetchArtist } from './api/index';
import Artist from './components/artist';
import Message from './components/message';
import Search from './components/search';
import Spinner from './components/spinner';
import './App.scss';

/**
 * Application view.
 */
export default class App extends React.Component {
    static initialState = {
        artist: undefined,
        fetching: false,
        error: undefined,
    };

    constructor (props) {
        super(props);

        this.state = { ...App.initialState };
    }

    render() {
        const { fetching, error, artist } = this.state;

        return (
            <div className="App">
                <div className="App-container">
                    <Search placeholder="Search for artist" onSearch={ this.onQueryChange.bind(this) } />
                    {(() => (
                        fetching && <Spinner />
                    ) || (
                        error && <Message text={ error }/>
                    ) || (
                        artist && <Artist { ...artist } />
                    ))()}
                </div>
            </div>
        );
    }

    /**
     * Fetches artist data.
     * @param {string} searchValue value to search.
     */
    fetchData (searchValue) {
        const me = this;

        me.setState({ ...App.initialState, fetching: true });

        fetchArtist(searchValue)
            .then((artist) =>
                me.setState({ artist, fetching: false }))
            .catch((error) =>
                me.setState({ ...App.initialState, error: error.message }));
    };

    /**
     * On search query change.
     * @param {string} value Search field value.
     */
    onQueryChange (value) {
        if (value) {
            this.fetchData(value);
        } else {
            this.setState({ ...App.initialState });
        }
    }
}