const STORAGE_KEY = 'app_state';

/**
 * Reads state from storage.
 * @return {Object} Saved data.
 */
export const storageRead = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
        return null;
    }
};

/**
 * Saves state in storage.
 * @param {Object} data State to save in storage.
 */
export const storageSet = (data) => {
    localStorage && localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

/**
 * Clears state from storage.
 */
export const storageRemove = () => {
    localStorage && localStorage.removeItem(STORAGE_KEY);
};