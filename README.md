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







