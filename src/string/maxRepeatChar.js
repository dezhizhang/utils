
/**
 * 字符串中重复最多的字符
*/
export function maxRepeatChar(str) {
    if(typeof str !== 'string') return str;
    let i = 0;
    let j = 0;
    let maxCount = 0;
    let maxChar = '';
    while(i < str.length - 1) {
        if(str[i] !== str[j]) {
            if(j - i > maxCount) {
                maxCount = j - i;
                maxChar = str[i]
            }
            i = j;
        }
        j++
    }

    return {maxCount,maxChar};
}