/**
 * 得到数组过虑左边count个后乖余元素组成的数组
*/
export function drop(array,count) {
    if(array.length === 0) return [];
    if(count===undefined ||  count <= 0 || count === null) {
        count = 1;
    }
    let arr = [];
    for(let i=0;i < array.length;i++) {
       if(i >= count) {
           arr.push(array[i]);
       }
    }
    return arr;
}

//dropRight方法
export function dropRight(array,count) {
    if(array.length === 0) return [];
    if(count === undefined || count === null || count <=0) {
        count = 1
    }
    let arr = [];
    for(let i=0;i < array.length;i++) {
        if(i < count) {
            arr.push(array[i])
        } 
    }
    return arr;
}

