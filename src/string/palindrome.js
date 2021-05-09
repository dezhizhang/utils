/**
 * 判断是否是回文;如果量返回true否则返回false
*/

export function palindrome(str) {
    if(typeof str !== 'string') return str;
    let arr = [];
    for(let i= str.length;i >=0;i--) {
        arr.push(str[i]);
    }
    return str === arr.join('');
}