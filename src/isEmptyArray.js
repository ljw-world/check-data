/**
 * 检查Array类型是否为空
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isEmptyArray([]) => true
 * isEmptyArray([1]) => false
 */
function isEmptyArray (value) {
  return JSON.stringify(value) === '[]'
}

module.exports = isEmptyArray
