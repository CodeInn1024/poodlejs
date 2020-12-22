/*
 * @Description: 毫秒转为剩余时间
 * @Version: 1.0
 * @Autor: lqrui
 * @Date: 2020-12-22 16:45:06
 * @LastEditors: lqrui.cn
 * @LastEditTime: 2020-12-22 16:46:02
 */

export function formatHMS(ms, level = 2) {
  let _str = '';
  // 天
  const days = Math.floor(ms / (24 * 3600 * 1000));
  // 小时
  let _ms = ms % (24 * 3600 * 1000);
  const	hours = Math.floor(_ms / (3600 * 1000));
  // 分钟
  _ms = _ms % (3600 * 1000);
  const	minutes = Math.floor(_ms / (60 * 1000));
  // 秒
  _ms = _ms % (60 * 1000);
  const	seconds = Math.round(_ms / 1000);

  if (days > 0) {
    level--;
    _str += days + '天';
    if (level === 0) return _str;
  }

  if (hours > 0) {
    level--;
    _str += hours + '时';
    if (level === 0) return _str;
  }

  if (minutes > 0) {
    level--;
    _str += minutes + '分';
    if (level === 0) return _str;
  }

  if (seconds > 0) {
    level--;
    _str += seconds + '秒';
    if (level === 0) return _str;
  }

  if (_str) return _str;

  if (_ms) return ms + '毫秒';

  return '';
}
