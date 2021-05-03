/**
 * pull删除数组中与value相同的元素，返回所有删除元素
*/

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