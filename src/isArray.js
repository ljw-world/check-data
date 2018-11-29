/**
 * 检查是否是Array类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isArray([1]) => true
 * isArray({}) => false
 */
function isArray (value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}

module.exports = isArray
