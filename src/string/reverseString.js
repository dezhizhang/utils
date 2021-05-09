/**
 * 字符串倒序
*/
export function reverseString(str) {
    if(typeof str !=='string') return str;
    let arr = [];
    for(let i = str.length;i >=0;i--) {
        arr.push(str[i]);
    }
    return arr.join('');
}