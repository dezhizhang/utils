
/**
 * 字符串中重复最多的字符
*/
export function maxRepeatChar(str) {
    if(typeof str !== 'string') return str;
    let i = 0;
    let j = 0;
    let max = 0;
    while(i < str.length - 1) {
        if(str[i] !== str[j]) {
            if(j - i > max) {
                max = j - i;
            }
            i = j;
        }
        j++
    }

    return max;
}