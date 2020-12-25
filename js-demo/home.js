const values = ['a', 'b', 'c', 'd', 'e'];
const newValues = values.slice(1, 4);
console.log(newValues);
values.splice(2, 2);
values.splice(1, 0, 'foo');
console.log(values);
