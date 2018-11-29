/**
 * 检查是否是NaN
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNaN(NaN) => true
 * isNaN(0/0) => true
 */
function isNaN (value) {
  return Number.isNaN(value)
}

module.exports = isNaN
