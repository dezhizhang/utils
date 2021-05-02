# utils 工具方法库 

### call方法
```
export function call(Fn,obj,...args) {
    if(obj === undefined || obj === null) {
        obj = globalThis; //全局对像
    }
    //为obj添加临时的方法
    obj.temp = Fn;
    //调用temp方法
    let result = obj.temp(...args);
    //删除temp
    delete obj.temp;
    //返回执行结果
    return result;
}
```

