const values = ['a', 'b', 'ccc', 'dddd', 'e'];
console.log(values.indexOf('c'), values.indexOf('v'));

const newValues = values.filter(function (item) {
	return item > 'b';
});

console.log(newValues);

const found = values.find(function (item) {
	return item.length > 1;
});

console.log(found);

values.forEach(function (item) {
	console.log(item);
});
