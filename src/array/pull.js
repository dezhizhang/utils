/**
 * pull删除数组中与value相同的元素，返回所有删除元素
*/
import { findIndex } from './findIndex'
export function pull(array,...values) {
    for(let i=0;i < values.length;i++) {
       
        delete array[findIndex(array,(item) => item === values[i])]
    }
    return array;
}