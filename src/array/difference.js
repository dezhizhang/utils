/**
 * difference方法
*/
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