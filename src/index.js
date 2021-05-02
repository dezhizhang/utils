import { call } from './call';

function add(a,b) {
    console.log(this);
    return a + b + this.c;
}

let obj = {
    c:521
}
window.c = 1;
// let result = call(add,obj,1,2);
// console.log({result});
let result = call(add,null,1,2);
console.log(result);