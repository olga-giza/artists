import { mount } from 'enzyme';
import React from 'react';
import Search from './index';

describe('Search component', () => {
    it('sets initial value', () => {
        const search = mount(<Search value="Test" />);

        expect(search.find('input').props().value).toBe('Test');
    });

    it('doesn\'t search on input search', () => {
        const spy = jest.fn();

        const search = mount(<Search onSearch={ spy } />);

        search.simulate('change', { target: 'test' });

        expect(spy).toHaveBeenCalledTimes(0);
    });

    it('searches on enter press', () => {
        const spy = jest.fn();

        const search = mount(<Search onSearch={ spy } />);

        search.simulate('change', { target: 'test' });
        search.simulate('keyUp', { keyCode: 13 });

        expect(spy).toHaveBeenCalledTimes(1);
    });
});
