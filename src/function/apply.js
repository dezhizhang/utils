export function apply(fn,obj,args) {
    if(obj === undefined || obj === null) {
        obj = globalThis;
    }
    //为obj添加临时变量
    obj.temp = fn;
    //执行方法
    let result = obj.temp(...args);
    //删除临时属性
    delete obj.temp;
    //返回结果
    return result;
}