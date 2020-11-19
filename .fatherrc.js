/*
 * @Description: 
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-19 11:24:29
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-19 12:18:23
 */

export default {
  entry: 'index.js',
  esm: { type: 'rollup', file: 'es/poodle' },
  cjs: { type: 'rollup', file: 'lib/poodle'},
  umd: { file: 'umd/index', name: 'poodle' }
};