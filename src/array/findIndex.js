/**
 * 查找元素的下标
*/
export function findIndex(array,callback) {
    let index = -1;
    for(let i=0;i < array.length;i++) {
        let item = array[i]
        let bool = callback(item,i);
        if(bool) {
            index = i
        }
    }
    return index;
}