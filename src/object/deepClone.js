
/**
 * 对像的深拷贝
*/

// export function deepClone1(target) {
//     if(target instanceof Array || (target !== null && typeof target === 'object' )) {
//         return JSON.parse(JSON.stringify(target));
//     }else {
//         return target;
//     }
// }

// export function deepClone2(target) {
//     if(target instanceof Array || (target !== null && typeof target === 'object')) {
//         let cloneTarget = target instanceof Array ? []:{};
//         for(let key in target) {
//             if(target.hasOwnProperty(key)) {
//                 cloneTarget[key] = deepClone2(target[key]);
//             }
//         }
//         return cloneTarget;
//     }else {
//         return target
//     }
// }

// export function deepClone3(target,map = new Map()) {
//     if(target instanceof Array || (target !== null && typeof target === 'object')) {
//         let cloneTarget = map.get(target);
//         if(cloneTarget) {
//             return cloneTarget;
//         }
//         cloneTarget = target instanceof Array ? []:{};
//         map.set(target,cloneTarget);
//         for(let key in target) {
//             if(target.hasOwnProperty(key)) {
//                 cloneTarget[key] = deepClone3(target[key],map);
//             }
//         }
//         return cloneTarget;
//     }else {
//         return target;
//     }
// }


export function deepClone(target,map = new Map()) {
  if(target instanceof Array || (target !== null && typeof target === 'object')) {
    let cloneTarget = map.get(target);
    if(cloneTarget) {
        return cloneTarget;
    }
    if(target instanceof Array) {
        cloneTarget = [];
        map.set(target,cloneTarget);
        target.forEach((item,index) => {
            cloneTarget[index] = deepClone(item,map);
        })
    }else {
        cloneTarget = {};
        map.set(target,cloneTarget);
        for(let key in target) {
            if(target.hasOwnProperty(key)) {
                cloneTarget[key] = deepClone(target[key],map)
            }
        }
    }
    return cloneTarget;
  } else {
      return target;
  }
}


