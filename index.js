/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-19 10:18:43
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-12-01 16:50:43
 */

import './extension/Array';

import { queryParams } from './src/queryParams';
import { getParams } from './src/getParams';
import { deepClone } from './src/deepClone';
import { isEqual, isToEqual } from './src/isEqual';
import { arrayToTree } from './src/arrayToTree';

import { intersect, minus, complement, unionSet } from './src/array';

export {
  queryParams,
  getParams,
  deepClone,
  intersect,
  minus,
  complement,
  unionSet,
  isEqual,
  isToEqual,
  arrayToTree,
};
