/**
 * 检查是否是Symbol类型
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isSymbol(Symbol('a')) => true
 */
function isSymbol (value) {
  return Object.prototype.toString.call(value) === '[object Symbol]'
}

module.exports = isSymbol
