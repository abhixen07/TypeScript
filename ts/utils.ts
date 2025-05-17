export function add2Nos(a:number, b:number): number {
    return a + b;
}

export const PI = 3.14;

export class Calculator{
    add(a: number, b: number):number{
        return a + b
    }
    subtract(a: number, b: number):number{
        return a - b
    }
    mul(a: number, b: number):number{
        return a * b
    }
    div(a: number, b: number):number{
        return a / b
    }
}

export default function log(message: string): void {
    console.log(message);
}