import { fetchData } from './base';

/**
 * Maps response to data model.
 * @param data Response data.
 * @returns {{city: string, country: string, date: string, name: string}} Event object.
 */
const mapResponse = (data) => ({
    city: data.venue.city,
    country: data.venue.country,
    date: data.datetime,
    id: data.id,
    name: data.venue.name,
});

/**
 * Fetches artist's events data.
 * @param artistName Artist name.
 * @returns {Promise} Artist's events data request promise.
 */
export default (artistName) => {
    return fetchData(`/artists/${artistName}/events`)
        .then((response) => response.map(mapResponse))
}