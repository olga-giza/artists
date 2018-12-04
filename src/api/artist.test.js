import axios from 'axios';
import fetchArtist from './artist';

describe('fetchArtist', () => {
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

    const artistResponse = {
        id: 123,
        facebook_page_url: 'http://exaple.com',
        image_url: 'http://image.com',
        name: 'Any name',
    };

    const artistData = {
        id: 123,
        cover: 'http://image.com',
        url: 'http://exaple.com',
        name: 'Any name',
    };

    it('fetches artist data', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: artistResponse });

        expect(await fetchArtist('Any name', false)).toEqual(artistData);
    });

    it('fetches artist data including events', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: artistResponse });
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [ eventResponse ] });

        expect(await fetchArtist('Any name', true)).toEqual({
            ...artistData,
            events: [ eventData ],
        });
    });

    it('resolves artist data even if events service fail', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: artistResponse });
        jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Error'));

        expect(await fetchArtist('Any name', true)).toEqual(artistData);
    });

    it('handles `not found` error', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { error: 'not found' } });

        try {
            await fetchArtist('Any name', false);
        } catch (error) {
            expect(error.message).toBe('Loading data failed.');
        }
    });

    it('handles invalid success response', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({});

        try {
            await fetchArtist('Any name', false);
        } catch (error) {
            expect(error.message).toBe('Loading data failed.');
        }
    });

    it('handles response error', async () => {
        jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Error'));

        try {
            await fetchArtist('Any name', false);
        } catch (error) {
            expect(error.message).toBe('Error');
        }
    });
});
