const type = 'bar';
let xyz = 'x';

switch (type) {
	case 'foo':
	case 'bar':
		xyz += 'y';

	// eslint-disable-next-line no-fallthrough
	case 'baz':
		xyz += 'z';
	break;

	default:
}

console.log(xyz);
