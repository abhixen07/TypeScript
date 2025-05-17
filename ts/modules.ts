// modules (import / export)

import * as Utils from "./utils";
import log from "./utils";
// import { add2Nos } from "./utils";

console.log(Utils.add2Nos(2,3));

console.log(Utils.PI);

const calc = new Utils.Calculator();
console.log(calc.add(3, 4));
console.log(calc.mul(3, 4));

log('default export');



