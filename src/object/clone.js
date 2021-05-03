/**
 * clone对像的浅拷贝
*/

export function clone1(target) {
    if(target instanceof Array) {
        return Array.from(target)
    }else if(target !== null && typeof target === 'object') {
        return Object.assign({},target);
    }else {
        return target;
    }
}

//第二种实现方式
export function clone2(target) {
    if(target instanceof Array || (target !== null && typeof target === 'object')) {
        let cloneTarget = target instanceof Array ? []:{};
        for(let key in target) {
            if(target.hasOwnProperty(key)) {
                cloneTarget[key] = target[key];
            }
        }
        return cloneTarget;
    }else {
        return target;
    }
}