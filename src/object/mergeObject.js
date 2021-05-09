
/**
 * 语法object mergeObject(...objs)
 * 功能：合并多个对像，返回一个合并后对像(不改变原对像)
*/
import { concat } from '../array/concat'
export function mergeObject(...objs) {
    const obj = {};
    objs.forEach(item => {
        Object.keys(item).forEach(key => {
            const value = item[key];
            if(item.hasOwnProperty(key)) {
                item[key] = value;
            } else {
                obj[key] = concat([],obj[key],value);
            }
        })     
    });
    return obj;
}