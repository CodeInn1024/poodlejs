/*
 * @Description: 防抖
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-12-10 10:44:36
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-12-10 10:56:07
 */

export function debounce(fn, wait) {
  var timeout = null;
  return function() {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => {
      const _a = fn();
      return _a;
    }, wait);
  };
}

export function debounceSync(fn, wait) {
  var timeout = null;
  return function() {
    return new Promise(function(resolve) {
      if (timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(async() => {
        const _a = await fn();
        resolve(_a);
      }, wait);
    });
  };
}
