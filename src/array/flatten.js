

/**
 *  语法:let array = [1,[2,[3,[4,[5]],]]]
 *  功能：取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中
*/
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

export function flatten2(array) {
    let arr = [];
    arr = concat([],...array);
    while(arr.some(item => Array.isArray(item))) {
        arr = concat([],...arr)
    }
    return arr;
}