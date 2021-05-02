
/**
 * 数组去重方法
*/
//方法1
export function unique1(array) {
    const arr = [];
    array.forEach(item => {
        if(arr.indexOf(item) === -1) {
            arr.push(item)
        }
    })
    return arr;
}
//方法2
export function unique2(array) {
    const arr = [];
    const obj = {};
    array.forEach(item => {
        if(!obj.hasOwnProperty(item)) {
            arr.push(item);
            obj[item] = true;
        }
    });
    return arr;
}
//方法3
export function unique3(array) {
    return [...new Set(array)];
}


