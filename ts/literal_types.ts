// literal types
//A literal is a fixed value (like a string, number, or boolean) directly written in the code.
//A literal type restricts a variable to only specific literal values.

// string literal
type OrderStatus = 'delivered' | 'pending' | 'cancelled';
let order: OrderStatus = "pending";

let answer: 'yes' | 'no';
answer = 'no';

// number literal
let count: 0 | 1 | 2;
count = 0;

// boolean literal
let isVisible: true | false;
isVisible = true;

type LiteralType = 'hello' | 2 | 'hi' | { name: string; age: number };

type Action = 'add' | 'update' | 'delete';

function takeAction(action: Action){
    switch(action){
        case 'add':
            console.log('add function');
            break;
        case 'update':
            console.log('update function');
            break;
        case 'delete':
            console.log('delete function');
            break;
        default:
            console.log('none');
            break;
    }
}

function printStatus(status: 'success' | 'error' | 'loading'): void {
    console.log(`Current state is ${status}`);
  }
  
  printStatus('success'); //excepth these 3 gives error
  // printStatus('completed');
  
  // with interface
  interface ButtonConfig {
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'green' | 'blue';
  }
  
  const btn: ButtonConfig = {
    size: 'medium',
    color: 'green',
  };
  