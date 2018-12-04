/**
 * @type {Object} URL forbidden chars map.
 */
export const forbiddenChars = {
    '/': '%252F',
    '?': '%253F',
    '*': '%252A',
    '\\': '%27C'
};

/**
 * Replaces forbidden characters in given string.
 * @param {string} string String to parse.
 * @returns {string} Parsed string.
 */
export const stringParser = (string) => (
    string.replace(/(\/|\?|\*|\\)/g, (match) => forbiddenChars[match] || match)
);