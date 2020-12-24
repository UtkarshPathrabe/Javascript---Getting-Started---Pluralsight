let mySymbol = Symbol();
let person = {
	name: 'John',
	age: 32,
	partTime: false,
	[mySymbol]: 'secrectInformation',
};
// person.age = 33;
person['age'] = 44;
showMessage(person.age);
