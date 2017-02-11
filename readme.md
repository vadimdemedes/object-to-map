# object-to-map [![Build Status](https://travis-ci.org/vadimdemedes/object-to-map.svg?branch=master)](https://travis-ci.org/vadimdemedes/object-to-map)

Convert object to ES6 Map.


## Installation

```
$ npm install --save object-to-map
```


## Usage

```js
const objectToMap = require('object-to-map');

const obj = {
	a: 1,
	b: 2
};

const map = objectToMap(obj);
map.get('a');
//=> 1

map.get('b');
//=> 2
```


## Related

- [object-to-array](https://github.com/vadimdemedes/object-to-map)


## License

MIT © [Vadim Demedes](https://vadimdemedes.com)
