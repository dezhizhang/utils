/**
 * chunk数组折成二维数组
*/
export function chunk(array,size) {
    let bigArr = [];
    let smallArr = [];
    if(size === 0 || size > array.length || size === undefined){
        size = array.length;
    }
    if(size < 0) {
        size = 1;
    }

    for(let i=0;i < array.length;i++) {
        if(smallArr.length === 1) {
            bigArr.push(smallArr);
        }
        if(smallArr.length === size) {
            smallArr = [];
        }
        smallArr.push(array[i]);
    }
    return bigArr;

}