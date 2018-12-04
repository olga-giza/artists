import { mount } from 'enzyme';
import React from 'react';
import List from './index';
import Message from '../message';

describe('Search component', () => {
    const renderItem = () => (<div className="test" />);

    it('renders message for empty result set', () => {
        const list = mount(<List data={[]} itemRenderer={ renderItem } />);

        expect(list.find(Message).exists()).toBeTruthy();
    });

    it('renders message if data not passed', () => {
        const list = mount(<List itemRenderer={ renderItem } />);

        expect(list.find(Message).exists()).toBeTruthy();
    });

    it('renders all passed elements', () => {
        const mockData = [{ id: 1 }, { id: 2 }, { id: 3 }];

        const list = mount(<List data={ mockData } itemRenderer={ renderItem } />);

        expect(list.find('.test').length).toBe(mockData.length);
    });
});
