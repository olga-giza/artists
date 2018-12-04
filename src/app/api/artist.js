import { fetchData } from './base';
import fetchEvents from './events';
import { stringParser } from '../util/string';

/**
 * Maps response to data model.
 * @param data Response data.
 * @returns {{cover: string, name: string, url: string}} Artist object.
 */
const mapResponse = (data) => ({
    cover: data.image_url,
    id: data.id,
    name: data.name,
    url: data.facebook_page_url
});

/**
 * Fetches artist data.
 * @param {string} artistName Artist name.
 * @param {boolean} includeEvents Defines if events data should be included.
 * @returns {Promise} Request promise.
 */
export default (artistName, includeEvents = true) => {
    return new Promise((resolve, reject) => {
        fetchData(`/artists/${stringParser(artistName)}`)
            .then((response) => {
                if (includeEvents) {
                    fetchEvents(artistName)
                        .then((events) =>
                            resolve({ ...mapResponse(response), events }))
                        .catch(() =>
                            resolve(mapResponse(response)))
                } else {
                    resolve(mapResponse(response));
                }
            })
            .catch((error) => reject(error));
    });
}