/**
 * every方法
*/
export function every(array,callback) {
    for(let i=0;i < array.length;i++) {
        let bool = callback(array[i],i);
        if(!bool) return false
    }
    return true;
}