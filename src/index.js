
/**
 * 入口js
 * 向外暴露工具函数
*/

//function方法
export { apply } from './function/apply';
export { call } from './function/call';
export { bind } from './function/bind';

//array方法
export { unique1,unique2,unique3 } from './array/unique';
export { concat } from './array/concat'; 
export { slice } from './array/slice';
export { map } from './array/map';
export { reduce } from './array/reduce';
export { filter } from './array/filter';
export { find } from './array/find';
export { findIndex } from './array/findIndex';
export { every } from './array/every';
export { some } from './array/some';
export { compact } from './array/compact';
export { chunk } from './array/chunk';
export { difference } from './array/difference';
export { pull } from './array/pull';
export { drop,dropRight } from './array/drop';
export { mergeArray,mergeArray1 } from './array/mergeArray';
export { flatten1,flatten2 } from './array/flatten'

//object方法
export { newInstance } from './object/newInstance';
export { mergeObject } from './object/mergeObject';
export { clone1,clone2 } from './object/clone';
export { deepClone } from './object/deepClone';