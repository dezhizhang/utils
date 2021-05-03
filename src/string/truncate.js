/**
 * 截取字符串的长度
*/

export function truncate(str,count) {
    if(typeof str !== 'string') return str;
    return str.length > count ? `${str.substr(0,count)}...`:str;
}