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
### 数组的difference方法
- 查找一个集合的子集
```
export function difference(array1,array2) {
    const arr = [];
    if(array1.length === 0) {
        return arr;
    }else if(array2.length === 0) {
        return [...array1];
    }
    for(let i=0;i < array1.length;i++) {
        if(array2.indexOf(array1[i]) === -1) {
            arr.push(array1[i]);
        }
    }
    return arr;
}
```
- 使用方法
```
let array = [1,3,5,7];
let array1 = [5,8];
let res = utils.difference(array,array1);
```
### 数组合并方法
- 合并n个数组进行合并，并进行去重
```
export function mergeArray(array1,array2) {
    if(array1.length === 0) {
        return [...array2];
    }else if(array2.length === 0) {
        return [...array1]
    }
    let arr = [...array1];
    for(let i=0;i < array2.length;i++) {
        if(array1.indexOf(array2[i]) === -1) {
            arr.push(array2[i]);
        }
    }
    return arr;
}
```
- 使用方法
```
let array1 = [1,3,5,7,5];
let array2 = [1,5,8];
let res = utils.mergeArray(array1,array2);
```
- 支持多个数组的合并
```
export function mergeArray1(array1,...arrays) {
    if(arrays.length === 0) {
        return [...array1];
    }
    let arr = [...array1];
    let newArrays = [];
    for(let i=0;i < arrays.length;i++) {
        for(let j=0;j < arrays[i].length;j++) {
            newArrays.push(arrays[i][j]); 
        }
    }
    let setArr = [...new Set(newArrays)];
    for(let i=0;i < setArr.length;i++) {
        if(array1.indexOf(setArr[i])=== -1) {
            arr.push(setArr[i]);
        }
    }
    return arr;
}
```
- 使用方法
```
let array1 = [1,3,5,7,5];
let array2 = [1,5,8];
let array3 = [4,8,12];
let array4 = [2,4,6,8,10];
let res = utils.mergeArray1(array1,array2,array3,array4);
```
### 数组的pull方法
- pull删除数组中与value相同的元素，返回所有删除元素
```
export function pull(array,...values) {
    const arr = [];
    for(let index = 0;index < array.length;index++) {
        const item = array[index];
        if(values.indexOf(item) !== -1) {
            array.splice(index,1);
            arr.push(item);
            index--
        }
    }    
    return arr;
}
```
- 测试方法
```
let arr = [1,3,5,3,7];
let res = utils.pull(arr,2,7,3,7);
console.log('res',res);
```
### 数组的drop方法
```
export function drop(array,count) {
    if(array.length === 0) return [];
    if(count===undefined ||  count <= 0 || count === null) {
        count = 1;
    }
    let arr = [];
    for(let i=0;i < array.length;i++) {
       if(i >= count) {
           arr.push(array[i]);
       }
    }
    return arr;
}

```
```
//dropRight方法
export function dropRight(array,count) {
    if(array.length === 0) return [];
    if(count === undefined || count === null || count <=0) {
        count = 1
    }
    let arr = [];
    for(let i=0;i < array.length;i++) {
        if(i < count) {
            arr.push(array[i])
        } 
    }
    return arr;
}

```
- 使用方法
```
let arr = [1,3,5,7];
let res = utils.dropRight(arr,2);
console.log('res',res)
```
### 对像的浅拷贝
```
export function clone1(target) {
    if(target instanceof Array) {
        return Array.from(target)
    }else if(target !== null && typeof target === 'object') {
        return Object.assign({},target);
    }else {
        return target;
    }
}
```
```
//第二种实现方式
export function clone2(target) {
    if(target instanceof Array || (target !== null && typeof target === 'object')) {
        let cloneTarget = target instanceof Array ? []:{};
        for(let key in target) {
            if(target.hasOwnProperty(key)) {
                cloneTarget[key] = target[key];
            }
        }
        return cloneTarget;
    }else {
        return target;
    }
}
```
### 对像的深考贝
```
export function deepClone(target,map = new Map()) {
  if(target instanceof Array || (target !== null && typeof target === 'object')) {
    let cloneTarget = map.get(target);
    if(cloneTarget) {
        return cloneTarget;
    }
    if(target instanceof Array) {
        cloneTarget = [];
        map.set(target,cloneTarget);
        target.forEach((item,index) => {
            cloneTarget[index] = deepClone(item,map);
        })
    }else {
        cloneTarget = {};
        map.set(target,cloneTarget);
        for(let key in target) {
            if(target.hasOwnProperty(key)) {
                cloneTarget[key] = deepClone(target[key],map)
            }
        }
    }
    return cloneTarget;
  } else {
      return target;
  }
}
```
- 使用方法
```
let obj = {
    a:1,
    b:['e','f','g'],
    c:{h:{i:2}},
    d:function() {

        }
}       
let deepObj = utils.deepClone(obj);
console.log(deepObj,deepObj.c === obj.c);
```
### 字符串的倒序reverseString
```
export function reverseString(str) {
    if(typeof str !=='string') return str;
    let arr = [];
    for(let i = str.length;i >=0;i--) {
        arr.push(str[i]);
    }
    return arr.join('');
}
```
- 使用方法
```
let res = utils.reverseString('abcd');
```
### 字符串是否是回文palindrome
```
export function palindrome(str) {
    if(typeof str !== 'string') return str;
    let arr = [];
    for(let i= str.length;i >=0;i--) {
        arr.push(str[i]);
    }
    return str === arr.join('');
}
```
- 使用方法
```
let res = utils.palindrome('abcba');
```
### 字符串超出用...
```
export function truncate(str,count) {
    if(typeof str !== 'string') return str;
    return str.length > count ? `${str.substring(0,count)}...`:str;
}
```
- 使用方法
```
let res = utils.truncate('boomerang',7);
```
### 字符串中出现次数最多的字符
```
export function maxRepeatChar(str) {
    if(typeof str !== 'string') return str;
    let i = 0;
    let j = 0;
    let maxCount = 0;
    let maxChar = '';
    while(i < str.length - 1) {
        if(str[i] !== str[j]) {
            if(j - i > maxCount) {
                maxCount = j - i;
                maxChar = str[i]
            }
            i = j;
        }
        j++
    }

    return {maxCount,maxChar};
}
```
- 使用方法
```
let str = 'aaabbbbccccccccdddd';
let {maxCount,maxChar} = utils.maxRepeatChar(str);
```
### 相关链接地址
[github地址](https://github.com/dezhizhang/utils)
[num包地址](https://www.npmjs.com/package/utils-lodash)
























































