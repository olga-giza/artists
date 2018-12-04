import axios from 'axios';

/**
 * @type {string} Base URL.
 */
const URL_BASE = 'https://rest.bandsintown.com';

/**
 * @type {Object} Default request headers .
 */
const defaultHeaders = {
    'content-type': 'application/json; charset=utf-8',
};

/**
 * @type {Object} Default request query params.
 */
const defaultParams = {
    'app_id': 'APP_ID',
};

/**
 * API get request.
 * @param {string} url URL to API.
 * @returns {Promise} API request promise.
 */
export const fetchData = (url) => {
   return new Promise((resolve, reject) => {
       axios.get(URL_BASE + url, { params: { ...defaultParams }, headers: { ...defaultHeaders } })
           .then((response) => {
               if (response && response.data && !response.data.error) {
                   resolve(response.data);
               } else {
                   reject(new Error('Loading data failed.'))
               }
           })
           .catch((error) => reject(error));
   })
};
