/**
 * 检查是否是Set类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isSet(new Set()) => true
 */
function isSet (value) {
  return Object.prototype.toString.call(value) === '[object Set]'
}

module.exports = isSet
