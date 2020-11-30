/*
 * @Description: 判断两个对象是否相等
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-30 14:46:17
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-30 15:20:08
 */

export function isEqual(a, b) {
  if (!isObject(a) || !isObject(b)) return false;

  if (a === b) return true;

  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (const key in a) {
    const res = isEqual(a[key], b[key]);
    if (!res) return false;
  }
  return true;
}

// 判断a的所有值等于b，并比一定相等
export function isToEqual(a, b) {
  if (!isObject(a) || !isObject(b)) return false;

  if (a === b) return true;

  for (const key in a) {
    const res = isEqual(a[key], b[key]);
    if (!res) return false;
  }
  return true;
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}
