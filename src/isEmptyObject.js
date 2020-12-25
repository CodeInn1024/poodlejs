/*
 * @Description: 检查对象是否为空
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-12-25 08:45:37
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-12-25 08:47:29
 */

export function isEmptyObject(obj) {
  for (const name in obj) return false;
  return true;
}
