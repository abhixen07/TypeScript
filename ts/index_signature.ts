// index signature
// An index signature allows you to define objects with dynamic property names (keys), 
// where you don’t know the exact keys in advance, but you do know the type of keys and values.

interface StringArray {
    [index: number]: string;
}

let array1: StringArray = ['Code','with','Anab'];
console.log(array1[2]);

interface Fruit {
    [key: string]: string;
}
const fruitsarray: Fruit = {
    apple: 'A fruit',
    banana: 'A yellow fruit',
}

console.log(fruitsarray['apple'])