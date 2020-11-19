/*
 * @Description: URL参数转对象
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-19 11:42:26
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-19 11:58:13
 */

function getParams(url = '', arrayFormat) {
  const _a = {};
  if (url.indexOf('?') === -1) return _a;
  const _str = url.substring(url.indexOf('?') + 1);
  _str.split('&').forEach((v) => {
    const _arry = v.split('=');
    _a[_arry[0]] = _arry[1];
  });
  return _a;
}

export default getParams;
