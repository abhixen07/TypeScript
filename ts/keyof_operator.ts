// keyof operator
// keyof is a TypeScript operator used to 
// get the keys of an object type as a union of string literals.
interface Person2 {
    name: string;
    age: number;
    email: string;
}

type PersonKeys = keyof Person2;
let keys: PersonKeys = 'name';