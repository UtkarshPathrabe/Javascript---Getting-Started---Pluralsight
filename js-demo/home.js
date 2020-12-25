const values = ['a', 'b', 'c'];
const newValues = values.slice(1, 2);
console.log(newValues);
values.splice(1, 0, 'foo');
console.log(values);
