import { call } from './call';

export function bind(fn,obj,...args) {
    return function (...args2) {
        return call(fn,obj,...args,...args2);
    }
}