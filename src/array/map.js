
/**
 * 返回一个数组
*/
export function map(array,callback) {
    const arr = [];
    for(let i=0;i < array.length;i++) {
        let result = callback(array[i],i);
        arr.push(result);
    }
    return arr;
}