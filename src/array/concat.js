/**
 * concat数组合度
 * 语法: var arr = concat(array,value1[])
 * 功能：将n个数组或值与当前数组合并生成一个新数组，原始数组不会改变
*/

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
