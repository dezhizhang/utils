/**
 * 合并数组只接收一个数组
*/
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
/**
 * 接收多个数组的合并
*/
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