/**
 * 数组的过虑方法
*/
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