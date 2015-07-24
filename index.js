'use strict';

/**
 * Dependencies
 */

const objectToArray = require('object-to-array');


/**
 * Expose object-to-map
 */

module.exports = objectToMap;


/**
 * Convert object to ES6 Map
 */

function objectToMap (obj) {
  let arr = objectToArray(obj);

  let map = new Map(arr);

  return map;
}
