/**
 * 检查是否是date类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isDate(new Date()) => true
 * isDate('2018-01-01') => false
 */
function isDate (value) {
  return Object.prototype.toString.call(value) === '[object Date]'
}

module.exports = isDate
