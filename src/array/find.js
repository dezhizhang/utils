/**
 * find方法
*/
export function find(array,callback) {
    for(let i=0;i < array.length;i++){
        let item = array[i]
        let bool = callback(item,i);
        if(bool) {
            return item;
        }
    }
    return undefined;
}