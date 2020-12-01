/*
 * @Description: 数组相关处理【https://www.jb51.net/article/161671.htm】
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-30 11:13:00
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-30 16:12:32
 */

// 交集：返回a,b共有的值
export function intersect(a, b) {
  return a.filter(x => b.some((z) => z === x));
}

// 差集：返回a在b不存在的值
export function minus(a, b) {
  return a.filter(x => !b.some((z) => z === x));
}

// 补集：去掉a,b相同的值后返回a,b合并的值
export function complement(a, b) {
  return [...a.filter(x => !b.some((z) => z === x)), ...b.filter(x => !a.some((z) => z === x))];
}

// 并集：合并a,b后去掉重复
export function unionSet(a, b) {
  return Array.from(new Set([...a, ...b]));
}

