/**
 * 检查是否是RegExp类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isRegExp(/\d/) => true
 */
function isRegExp (value) {
  return Object.prototype.toString.call(value) === '[object RegExp]'
}

module.exports = isRegExp
