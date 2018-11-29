/**
 * 检查是否是Object类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isObject({a: 1}) => true
 * isObject([]) => fasle
 */
function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

module.exports = isObject
