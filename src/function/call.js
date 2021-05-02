export function call(fn,obj,...args) {
    if(obj === undefined || obj === null) {
        obj = globalThis;
    }
    //给object添加一个方法
    obj.tempFn = fn;
    //调用obj的temp方法传入args参数,得到返回值
    const result = obj.tempFn(...args);
    //删除obj上的tempFn
    delete obj.tempFn;
    //返回方法的返回值
    return result;
}