'use strict';

/**
 * Dependencies
 */

const objectToMap = require('./');

require('chai').should();


/**
 * Tests
 */

describe ('object-to-map', function () {

  it ('convert object to map', function () {
    let obj = {
      first: 'first value',
      second: 'second value'
    };

    let map = objectToMap(obj);

    map.size.should.equal(2);

    map.get('first').should.equal(obj.first);
    map.get('second').should.equal(obj.second);
  });

});
