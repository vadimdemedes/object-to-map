# object-to-map [![Circle CI](https://circleci.com/gh/vdemedes/object-to-map.svg?style=svg)](https://circleci.com/gh/vdemedes/object-to-map)

Convert object to ES6 Map.


### Installation

```
$ npm install object-to-map --save
```


### Usage

```javascript
const objectToMap = require('object-to-map');

let obj = {
  key: 'value'
};

let map = objectToMap(obj);

map.get('key') === 'value'; // true
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/object-to-map.svg?style=svg)](https://circleci.com/gh/vdemedes/object-to-map)

```
$ make test
```


### License

object-to-map is released under the MIT license.
