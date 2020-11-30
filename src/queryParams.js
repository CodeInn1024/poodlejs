/*
 * @Description: 对象转URL参数
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-11-19 10:01:19
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-11-30 11:57:24
 */

export function queryParams(data = {}, arrayFormat) {
  const _result = [];

  for (const key in data) {
    const value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) 	continue;
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) _result.push(`${key}[${i}]=${value[i]}`);
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(_value => _result.push(`${key}[]=${_value}`));
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(_value => _result.push(`${key}=_value`));
          break;
        case 'comma':
          // 结果: ids=1,2,3
          _result.push(`${key}=${value.join(',')}`);
        default:
          // 结果: ids=[1,2,3]
          _result.push(`${key}=${JSON.stringify(value)}`);
      }
    } else {
      _result.push(key + '=' + value);
    }
  }
  return _result.length ? _result.join('&') : '';
}
