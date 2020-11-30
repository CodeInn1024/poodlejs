/*
 * @Description: 数组相关处理
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-30 11:13:00
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-30 12:26:46
 */

// 返回a,b共有的值
export function intersect(a, b) {
  return a.filter(x => b.some((z) => z === x));
}

// 返回a在b不存在的值
export function minus(a, b) {
  return a.filter(x => !b.some((z) => z === x));
}

// 去掉a,b相同的值后返回a,b合并的值
export function complement(a, b) {
  return [...a.filter(x => !b.some((z) => z === x)), ...b.filter(x => !a.some((z) => z === x))];
}

// 合并a,b后去掉重复
export function unionSet(a, b) {
  return Array.from(new Set([...a, ...b]));
}

