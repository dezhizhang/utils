/**
 * 数组的some方法
*/

export function some(array,callback) {
    let bool = false;
    for(let i=0;i < array.length;i++) {
        bool = callback(array[i],i);
        if(bool) return true;
    }
    return bool;
}