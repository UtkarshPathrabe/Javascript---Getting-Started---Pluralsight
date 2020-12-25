const values = ['a', 'b', 'c'];
values.push('d');
console.log(values);
const last = values.pop();
console.log(last, values);
values.unshift('aaa');
console.log(values);
console.log(values.shift(), values);
