
/**
 * compact方法
*/
export function compact(array) {
    let arr = [];
    for(let i=0;i < array.length;i++) {
        if(!!array[i]) arr.push(array[i]);
    }
    return arr;
}