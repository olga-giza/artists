import moment from 'moment';

/**
 * Parses date to unified format.
 * @param {string} date Date to parse.
 * @returns {string} Date parsed to format `MMM Do, YYYY`.
 */
export const getDate = (date) => {
    return moment(date).utc().format('MMM Do, YYYY');
};

/**
 * Parses date to unified format.
 * @param {string} date Date to parse.
 * @returns {string} Date parsed to format `ddd, hhA`.
 */
export const getDayOfWeek = (date) => {
    return moment(date).utc().format('ddd, h A');
};
