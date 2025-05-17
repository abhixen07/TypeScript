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

let num: number = 1234_456_789;
// let num1: bigint = 12344567893733746563499329n;
console.log('num: ',num);
// console.log('num1: ',num1);

let character: string = 'Anabify';
let isAvaiable: boolean = true;

// let numArray: number[] = [1,2,3,4];
// let charArray: string[] = ['1','2','3','4'];

let val: null = null;

let obj: object = {
    name:'Abc',
    age: 10
};

let obj1 = {...obj} //spread operator
console.log(obj1);

//any type
let numVal;
numVal = 1;
numVal = 'a'

function testAnyType(val: any) {
    console.log(val);
  }
  
  // Arrays
  let numArray: number[] = [1, 2, 3, 4];
  let charArray: string[] = ['a', 'b'];
  
  // charArray.forEach(val => val.includes('a'));
  // numArray.forEach(val => val.toFixed(2));
  

  // Tuples
  //it works bettter with 2 arguments, key-value pair
let arr: [number, string] = [1, 'Anab'];

let coordinates3D: [number, number, number] = [1, 2, 3];

// localhost:4200?name=Anabify&phone=1234567890
 
let userData: [string, number] = ['Anabify', 123456789];

let response: [number, string] = [200, 'Success']; //http-response
// response.push(0); //append ho jae gaah -it is typescript flaw(drawback) of tuple
// console.log('reponse: ', response);

//enum

// void
function logMessage(message: string): void{
    console.log(message);
    // return undefined;
    
}

// Type Inference: TypeScript guesses the type based on the value.
// Type Assertion: You manually tell TypeScript the type of a value.

// type inference
let userName = 'Anab'; // typescript infers the type as string

// type assertion
let someValue: any = 'Hello World';
let strLength: number = (someValue as string).length;
console.log(strLength);

// union types
let id: string | number; // id can either be string or a number
id = 'abc';
id = 101;
// id = true;

function printId(id: string | number) {
  console.log(`id: ${ id }`); // 'id: ' + id
}

printId('abc');
printId(101);

// type narrowing
function printIdFn(id: string | number) {
  if (typeof id === 'string') {
    console.log('id is a string: ', id.toUpperCase());
  }
  else{
      console.log(`id: ${ id }`); // 'id: ' + id
  }
}

// printIdFn('xyz');
printIdFn(1);

//interface
//for type checking
interface Person{
    name: string;
    age: number;
    greet(): void;
}

let person: Person = {
    name:'abc',
    age: 10,
    greet(){
        console.log('Hi');
    },
};

person.greet();

// interface with Function types 
interface MathOp { 
    (a: number, b: number): number; 
}
 
const add1: MathOp = (x, y) => x + y; 
const subtract: MathOp = (x, y) => x - y; 

console.log('add 2 numbers: ', add1(1, 2)); 
console.log('subtract 2 numbers:', subtract (5, 4));

//type alias
type UserID = string;

let userId: UserID = 'abc';

type Person1 = {
    name: string;
    age: number;
}

let person1: Person1 = {
    name: 'abc',
    age: 12
}

console.log(person1.name);

type ID = string | number;

let userId1: ID = 'abc';
let orderId: ID = 101;

//interface vs type alias

// interface is mostly used for objects, but can also describe functions.
// type is more commonly used for functions because it’s simpler and more flexible.

//interface
//can pas same interce again and again with different properties
interface User {
    name: string,
    phone: number
};

interface User{
    address: string,
};

// interface Customer extends User{
//     address: string,
// };

let myCustomer: User = {
    name: 'Good',
    phone: 123456,
    address: 'abc',
}

type Vehicle = {
    make: string,
    model: string
}

// & -> intersection
type Car = Vehicle & {
    isElectric: boolean,
};

let myCar: Car = {
    make: 'HONDA',
    model: 'Civic Reborn',
    isElectric: true
}


// type Vehicle {
//     isElectric: boolean,
// };

// //error duplicate type identifier

// let myCar: Vehicle = {
//     make: 'HONDA',
//     model: 'Civic Reborn',
//     isElectric: true //error
// }


type MathOp1 = (a:number, b:number) => number;
let add2: MathOp1 = (x,y) => x + y;
console.log(add2(2,2));

type Status = "active" | "inactive" | "pending"

let userStatus: Status = 'active';

type Tree = {
    value: string;
    children: Tree[];
}

let tree: Tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
            children:[{value:'gradChild',children:[]}]
        }
    ]
}

//intersection
// (property) server?: string | undefined
let config: {server?: string, port: number} & { secure: boolean; timeout: number} = {
    server: 'localhost',
    port: 8080,
    secure: true,
    timeout: 5000
};