/*
 * @Description: 数组扩展
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-30 11:29:35
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-30 11:32:09
 */

import { intersect } from '../src/array';

Array.intersect = function(a, b) {
  return intersect(a, b);
};
