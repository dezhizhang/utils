
/**
 * 语法： var arr = slice(array,[begin[,end]])
 * 功能：返回一个由begin和end决定的原始数组浅拷贝，原始数组不会被改变
*/
export function slice(array,begin,end) {    
    const arr = [];
    if(array.length === 0) return arr;
    begin = begin || 0;
    end = end || array.length;
    if(begin <=0 && Math.abs(begin) <= array.length) {
       begin = array.length + begin;
    }
    if(end > array.length) {
        end = array.length;
    }
    if(end < 0 && Math.abs(end) <= array.length - 1) {
        end = array.length + end;
    }

    console.log('begin',begin);
    console.log('end',end);
    for(let i = begin;i < end;i++) {
        arr.push(array[i]);
    }
    return arr;
}