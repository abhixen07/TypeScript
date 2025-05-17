"use strict";
// // let a1 = 1; //error bcz ts is static and can't change type
// let a1: number = 1;
// a1 = 10
// // Function number type not append string and number so error
// // function add1(a: number,b: string): number{
// //     return a + b; // type checking
// // }
// function add1(a: number,b: number): number{
//     return a + b; // type checking
// }
// const y = add1(1,a1);
// console.log(y);
// a1 = y;
// console.log(a1);
let num = 1234456789;
// let num1: bigint = 12344567893733746563499329n;
console.log('num: ', num);
// console.log('num1: ',num1);
let character = 'Anabify';
let isAvaiable = true;
// let numArray: number[] = [1,2,3,4];
// let charArray: string[] = ['1','2','3','4'];
let val = null;
let obj = {
    name: 'Abc',
    age: 10
};
let obj1 = { ...obj }; //spread operator
console.log(obj1);
//any type
let numVal;
numVal = 1;
numVal = 'a';
function testAnyType(val) {
    console.log(val);
}
// Arrays
let numArray = [1, 2, 3, 4];
let charArray = ['a', 'b'];
// charArray.forEach(val => val.includes('a'));
// numArray.forEach(val => val.toFixed(2));
// Tuples
//it works bettter with 2 arguments, key-value pair
let arr = [1, 'Anab'];
let coordinates3D = [1, 2, 3];
// localhost:4200?name=Anabify&phone=1234567890
let userData = ['Anabify', 123456789];
let response = [200, 'Success']; //http-response
// response.push(0); //append ho jae gaah -it is typescript flaw(drawback) of tuple
// console.log('reponse: ', response);
//enum
// void
function logMessage(message) {
    console.log(message);
    // return undefined
}
//# sourceMappingURL=index.js.map