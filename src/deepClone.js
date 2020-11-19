/*
 * @Description: 对象深拷贝
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-19 16:03:06
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-19 16:07:44
 */

function deepClone(obj) {
  if (!obj) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') return obj;
  const _a = Array.isArray(obj) ? [] : {};
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      _a[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return _a;
}

export default deepClone;
