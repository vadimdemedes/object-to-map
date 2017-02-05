import test from 'ava';
import objectToMap from './';

test('fail when input is not an object', t => {
	t.throws(() => objectToMap(), 'Expected object, got undefined');
});

test('convert object to map', t => {
	const obj = {
		first: 'first value',
		second: 'second value'
	};

	const map = objectToMap(obj);
	t.is(map.size, 2);
	t.is(map.get('first'), obj.first);
	t.is(map.get('second'), obj.second);
});
