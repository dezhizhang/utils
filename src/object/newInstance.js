/**
 * 生成实例instance
*/

export function newInstance(Fn,...args) {
    //创建一个空对像
    const obj = {};
    //调用Fn函数，且指定this是创建对像
    const result = Fn.apply(obj,args);

    //如果Fn执行返回的是对像类型，最终结果就是这个对像
    if(result instanceof Object) {
        return result;
    }

    // obj.__proto__ = {};
    obj.__proto__.constructor = Fn.prototype;
    
    //返回新建的对像
    return obj;
}