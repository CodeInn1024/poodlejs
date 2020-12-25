/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-19 10:18:43
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-12-25 08:50:43
 */

import './extension/Array';

import { intersect, minus, complement, unionSet } from './src/array';
import { arrayToTree } from './src/arrayToTree';
import { debounce, debounceSync } from './src/debounce';
import { deepClone } from './src/deepClone';
import { formatHMS } from './src/formatHMS';
import { getParams } from './src/getParams';
import { isEmptyObject } from './src/isEmptyObject';
import { isEqual, isToEqual } from './src/isEqual';
import { queryParams } from './src/queryParams';

export {
  intersect, minus, complement, unionSet,
  arrayToTree,
  debounce, debounceSync,
  deepClone,
  formatHMS,
  getParams,
  isEmptyObject,
  isEqual, isToEqual,
  queryParams,
};
