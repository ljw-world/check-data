/**
 * 检查是否是Number类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNumber(1) => true
 * isNumber('1') => false
 */
function isNumber (value) {
  return Object.prototype.toString.call(value) === '[object Number]'
}

module.exports = isNumber
