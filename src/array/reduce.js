/**
 * 数据的不断累加
 */

export function reduce(array,callback,initValue) {
    let total = initValue;
    for(let i = 0;i < array.length;i++) {
        total = callback(total,array[i],i);
    }
    return total;
}