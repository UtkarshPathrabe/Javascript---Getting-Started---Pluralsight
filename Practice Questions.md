Javascript: Getting Started  
===========================  

Q01. What shows in the console?  
```
function foo() {  
  return "bar";  
}  
console.log(foo());  
```  
A. undefined  
B. foo  
C. null  
D. bar  
Answer: `bar`  

Q02. What type is `result`?  
```
let result = { };
```  
A. An array  
B. Null  
C. An object  
D. Undefined  
Answer: `An object`  

Q03. How do you access the beta property value in this code?  
```
let foo = {
  alpha: 1,
  beta: 2
};
```  
A. foo.beta  
B. foo{beta}  
C. foo(beta)  
D. foo->beta  
Answer: `foo.beta`  

Q04. What is the value of `result`?  
```
let places = [
  { city: 'Amsterdam', europe: true },
  { city: 'Paris', europe: true },
  { city: 'Sacramento', europe: false }
];
let result = places[2].city;
```  
A. Paris  
B. Sacramento  
C. null  
D. Amsterdam  
Answer: `Sacramento`  

Q05. What attribute allows you to uniquely identify any HTML element?  
A. elementId  
B. id  
C. name  
D. tag  
E. tagId  
Answer: `id`  

Q06. What shows in the console?  
```
/* console.log(1); */
// console.log(2);
console.log(3);
```  
A. 2  
B. 3
C. 1 and 2  
D. 1, 2 and 3  
Answer: `3`  

Q07. Which HTML tag is used to add JavaScript to a web page?  
A. `<script>`  
B. `<source>`  
C. `<src>`  
D. `<import>`  
Answer: `<script>`  

Q08. What shows in the console?  
```
let arr = [ 1, 2, 3 ];
console.log(arr[3]);
```  
A. undefined  
B. 2  
C. 3  
D. 1  
Answer: `undefined`  

Q09. How many times will this loop execute?  
```
let count = 5;
while (count) {
  console.log(count);
  count--;
}
```  
A. 5  
B. 4  
C. Never  
D. 6  
Answer: `5`  

Q10. What shows in the console?  
```
var message = "no";
function foo(message) {
  message = "yes";
}
foo(message);
console.log(message);
```  
A. null  
B. TypeError  
C. undefined  
D. no  
Answer: `no`  

Q11. What shows in the console?  
```
function foo(a, b, c) {
  console.log( b );
}
foo( 4, 5, 6 );
```  
A. b  
B. 6  
C. 5  
D. 4  
Answer: `5`  

Q12. In JavaScript, what does the following evaluate to?  
```
4 + 3 * 2
```  
A. 24  
B. 7  
C. 10  
D. 49  
Answer: `10`  

Q13. What is an uninitialized variable set to?  
```
let result;
// what is result?
```  
A. null  
B. undefined  
C. NaN  
D. 0  
Answer: `undefined`  

Q14. What shows in the console?  
```
if (5 >= 5) {
  console.log('first');
} else {
  console.log('second');
}
```  
A. first second  
B. second  
C. first  
D. (nothing)  
Answer: `first`  