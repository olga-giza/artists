import axios from 'axios';
import fetchEvents from './events';

describe('fetchEvents', () => {
    const eventResponse = {
        id: 234,
        datetime: '123',
        venue: {
            city: 'Berlin',
            country: 'Germany',
            name: 'Any name',
        }
    };

    const eventData = {
        id: 234,
        city: 'Berlin',
        country: 'Germany',
        date: '123',
        name: 'Any name',
    };

    it('fetches events data', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [ eventResponse ] });

        expect(await fetchEvents('Any name')).toEqual([ eventData ]);
    });

    it('resolves empty array', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [] });

        expect(await fetchEvents('Any name')).toEqual([]);
    });

    it('handler response error', async () => {
        jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Error'));

        try {
            await fetchEvents('Any name');
        } catch (error) {
            expect(error.message).toBe('Error');
        }
    });
});
