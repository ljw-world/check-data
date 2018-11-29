/**
 * 检查是否是String类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isString('a') => true
 * isString(123) => false
 */
function isString (value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

module.exports = isString
