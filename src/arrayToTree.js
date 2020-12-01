/*
 * @Description: 数组转树形
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-12-01 15:44:34
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-12-01 16:51:24
 */

import { deepClone } from './deepClone';

export function arrayToTree(array, fn = (a, b) => a.id === b.parentId, parent = { id: 0 }) {
  const tree = [];

  array.forEach((v) => {
    if (fn(parent, v)) {
      const _obj = deepClone(v);
      const temp = arrayToTree(array, fn, _obj);
      if (temp.length > 0) _obj.children = temp;
      tree.push(_obj);
    }
  });

  return tree;
}
