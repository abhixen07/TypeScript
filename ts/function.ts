//functions
function addNumbers(a: number, b:number): number{
    return a + b;
}

console.log(addNumbers(2,6));

//function expression
const divide = function (a: number, b:number): number{
    return a / b;
}

console.log(divide(addNumbers(2,6),4));

//arrow function

const mul = (a: number, b:number): number => {
    return a * b;
}

console.log(mul(addNumbers(2,6),4));

// optional & default parameters

// optional
function greet(username: string, greeting?: string): string{
    return `${greeting ? greeting : ''}${username}`;
    // return greeting ? `${greeting}` : `${username}`;

}

console.log(greet('Anab'));


// default parameters
function greet1(username: string, greeting: string = 'Hi'): string{
    return `${greeting} ${username}`;
}

console.log(greet1('Anab','Hey'));


// function overloading
// multiple function allowed through signatures in ts
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number{
    return value.length;
}

console.log(getLength('hello'));
console.log(getLength([1, 2, 3]));

// Rest parameters
function sum(...numbers: number[]): number {
    //one liner
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));            // Output: 10
console.log(sum(5, 7, 3, 4, 10, 100));   // Output: 129


// Rest parameters
function greet2(greeting:string, ...name:string[]):void{
    name.forEach((name)=>{
        console.log(`${greeting},${name}`);
        
    })


}

// console.log(greet2("hello", "nikhal","code withtech","Everyone")); //undefined
greet2("hello", "nikhal","code withtech","Everyone");
