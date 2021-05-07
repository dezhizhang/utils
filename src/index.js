
//drop
import lodash from 'lodash';
// let arr = [1,2,3];
// let res = lodash.drop(arr,1);
// console.log('res',res)

//fill
// let array = [1, 2, 3];
// let res = lodash.fill(array,'*',1,3);
// console.log('res',res);


// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];
// let res = lodash.findIndex(users, { 'user': 'fred', 'active': false });
// console.log('res',res);

// var users = [
//   { 'user': 'barney',  'active': true },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': false }
// ];

// let res = lodash.findLastIndex(users,(o) =>{ return !o.active });
// console.log('res',res);

// let res = lodash.head([1, 2, 3]);
// console.log('res',res);

let res = lodash.flatten([1, [2, [3, [4]], 5]]);
console.log('res',res);