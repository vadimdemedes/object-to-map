'use strict';

const objectToArray = require('object-to-array');

module.exports = input => {
	if (typeof input !== 'object') {
		throw new TypeError(`Expected object, got ${typeof input}`);
	}

	return new Map(objectToArray(input));
};
