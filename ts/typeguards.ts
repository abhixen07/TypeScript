// type guards
// Type Guards are used to check the type of a variable at runtime,
// so TypeScript can safely assume its type inside a block of code.

//typeof
//instanceof
//custom type guard fn

//type guards more  specific type check 
//run time check type of varialbe ,object etc  and narrow its type with conditon
//ensure we pass the correct type avoid run time errror
 //used mostly with union type ensure type saftey 
 //3 method 
 //typeof instanceof   custom type guard fn 
//! typeof 
function printID(id:string|number){
    if(typeof id === 'string'){
        console.log(`Id is string ${id}`);
        
    }
    else{
        console.log(`Id is number ${id}`);
        
    }
 }

printID('abc');
printID(2);
 //instanceof 
class Dog {
    bark(){
        console.log('Woof');
        
    }
}

class Cat {
    meow(){
        console.log('Meow');
        
    }
}
//pass class as a type  instance of particularclass
function handlePet(sound: Cat|Dog){
     if(sound instanceof Cat){
        sound.meow();
        
    }
    else{
        sound.bark();
        
    }

}

//custom type guard
//return a boolean value and used a special return value 
interface Fish{
    swim():void;
}

interface Bird{
    bird(): void
}
//set with is as keywork 

function isFish(pet: Fish|Bird):pet is Fish{
    //assertion usage
    return (pet as Fish).swim!==undefined;

}


function move(pet: Fish|Bird){
    if(isFish(pet)){
        pet.swim();

    }
    else{
pet.bird();
    }
}

//new fn 
function isString(value :any): value is string{
    return typeof value === 'string';
    //restrict around string 
}
function showString(value:string|number){
    if(isString(value)){
        console.log('value is string');
        
    }
    else{

      console.log('value is number');
    }
}

showString('hello');