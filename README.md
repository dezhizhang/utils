# utils 工具方法库 

### call方法
```
export function call(Fn,obj,...args) {
    if(obj === undefined || obj === null) {
        obj = globalThis; //全局对像
    }
    //为obj添加临时的方法
    obj.temp = Fn;
    //调用temp方法
    let result = obj.temp(...args);
    //删除temp
    delete obj.temp;
    //返回执行结果
    return result;
}
```
### call测试用例
```
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
```
### apply方法
```
export function apply(Fn,obj,args) {
    if(obj === undefined || obj === null) {
        obj = globalThis;
    }
    //为obj添加临时变量
    obj.temp = Fn;
    //执行方法
    let result = obj.temp(...args);
    //删除临时属性
    delete obj.temp;
    //返回结果
    return result;
}
```
### apply测试用例
```
import { apply } from './apply';
function add(a,b) {
    console.log(this);
    return a + b + this.c;
}
let obj = {
    c:521
}
window.c = 1;
let result = apply(add,null,[1,2]);
console.log(obj);
console.log(result);
```
### 数组的concat
- 语法: var arr = concat(array,value1[])
- 将n个数组或值与当前数组合并生成一个新数组，原始数组不会改变
```
export function concat(array,...values) {
    const arr = [...array];
    values.forEach(value => {
        if(Array.isArray(value)) {
            arr.push(...value)
        }else {
            arr.push(value)
        }
    });
    return arr;
}
```
### 数组撸flatten方法
- 语法:let array = [1,[2,[3,[4,[5]],]]]
- 功能：取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中
```
import { concat } from './concat'
export function flatten1(array) {
    return array.reduce((pre,item) => {
        if(Array.isArray(item)) {
            pre = concat(pre,flatten1(item));
        }else {
            pre.push(item);
        }
        return pre;
    },[])
}
```
```
export function flatten2(array) {
    let arr = [];
    arr = concat([],...array);
    while(arr.some(item => Array.isArray(item))) {
        arr = concat([],...arr)
    }
    return arr;
}
```
### 数组的map方法
- 返回一个新的数组
```
export function map(array,callback) {
    const arr = [];
    for(let i=0;i < array.length;i++) {
        let result = callback(array[i],i);
        arr.push(result);
    }
    return arr;
}
```
### 数组的reduce方法
- 返回一个累加的结果
```
export function reduce(array,callback,initValue) {
    let total = initValue;
    for(let i = 0;i < array.length;i++) {
        total = callback(total,array[i],i);
    }
    return total;
}
```
- reduce的用法

```
let array = [1,2,3,4,5];
let res = utils.reduce(array,(total,item,index) =>{
    return total + item
},0);
```
### 数组的filter方法
- 过虑数组
```
export function filter(array,callback) {
    const arr = [];
    for(let i=0;i < array.length;i++) {
        let bool = callback(array[i],i);
        if(bool) {
            arr.push(array[i]);
        }
    }
    return arr;
} 
```
- filter使用方法
```
let array = [1,2,3,4,5];
let res = utils.filter(array,(item,index) => {
    return item > 2
});
```
### 数组的findIndex方法
- 查找数组中某个元素的下标
```
export function findIndex(array,callback) {
    let index = -1;
    for(let i=0;i < array.length;i++) {
        let item = array[i]
        let bool = callback(item,i);
        if(bool) {
            index = i
        }
    }
    return index;
}
```
- 使用方法
```
let array = [1,2,3,4,5];
let res = utils.findIndex(array,(item,index) => {
    return item === 2
});
console.log('res',res);
```
### 数组的every方法的使用
- 数组中全部返回true时才返回true
```
export function every(array,callback) {
    for(let i=0;i < array.length;i++) {
        let bool = callback(array[i],i);
        if(!bool) return false
    }
    return true;
}
```
- 使用方法
```
let array = [1,2,3,4,5];
let res = utils.every(array,(item,index) => {
    return item >= 1
});
console.log('res',res);
```
### 数组的some方法的使用
- 数组中只要有一个返回true就返回true
```
export function some(array,callback) {
    let bool = false;
    for(let i=0;i < array.length;i++) {
        bool = callback(array[i],i);
        if(bool) return true;
    }
    return bool;
}
```
### 数组的compact方法
- 过虑数组中所有返回true的方法
```
export function compact(array) {
    let arr = [];
    for(let i=0;i < array.length;i++) {
        if(!!array[i]) arr.push(array[i]);
    }
    return arr;
}
```
- 使用方法
```
let array = [1,undefined,3,false,5,'0'];
let res = utils.compact(array);
```
### 数组的thunk方法
- 一维数组根据指定的大小生成二级数组
```
export function chunk(array,size) {
    let bigArr = [];
    let smallArr = [];
    if(size === 0 || size > array.length || size === undefined){
        size = array.length;
    }
    if(size < 0) {
        size = 1;
    }

    for(let i=0;i < array.length;i++) {
        if(smallArr.length === 1) {
            bigArr.push(smallArr);
        }
        if(smallArr.length === size) {
            smallArr = [];
        }
        smallArr.push(array[i]);
    }
    return bigArr;

}
```
- 使用方法
```
let array = [1,2,3,4,5,6];
let res = utils.chunk(array,4);
```

























