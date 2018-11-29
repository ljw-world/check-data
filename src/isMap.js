/**
 * 检查是否是Map类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isMap(new Map()) => true
 */
function isMap (value) {
  return Object.prototype.toString.call(value) === '[object Map]'
}

module.exports = isMap
