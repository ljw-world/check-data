/**
 * 检查Object类型是否为空
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isEmptyObject({}) => true
 * isEmptyObject({a: 1}) => false
 */
function isEmptyObject (value) {
  return JSON.stringify(value) === '{}'
}

module.exports = isEmptyObject
