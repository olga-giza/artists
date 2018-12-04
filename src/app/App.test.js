import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Application view', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders search component', () => {
        const app = mount(<App />);

        expect(app.find('.Search').exists()).toBeTruthy();
    });
});
