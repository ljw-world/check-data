/**
 * 检查是否是Function类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * let fn = () => {}
 * isFunction(fn) => true
 */
function isFunction (value) {
  return Object.prototype.toString.call(value) === '[object Function]'
}

module.exports = isFunction
