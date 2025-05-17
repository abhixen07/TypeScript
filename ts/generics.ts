// Generics
// Generics are the way to create components (function, classes or interfaces)
// that work with different types without losing type safety.
// Generics allow you to write reusable and flexible code that works
// with any data type, without losing type safety.



function genericIdentity<T>(arg: T): T {
    return arg;
  }
  
  console.log(genericIdentity<number>(10));
  console.log(genericIdentity<string>('Hi'));
  console.log(genericIdentity<boolean>(true));
  
  // with interface 
  interface KeyPair<T, U> {
    key: T;
    value: U;
  }
  
  let keyPairValue: KeyPair<string, number> = {
    key: 'pair',
    value: 10
  };
  
// generic constraints
function getLength1<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength1('Hello'));
console.log(getLength1([1, 2, 3]));
// console.log(getLength(123)); // Error: number does not have 'length' property


