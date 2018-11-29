/**
 * 检查是否是空String类型是否为空
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isEmptyString('') => true
 * isEmptyString('""') => false
 */
function isEmptyString (value) {
  return JSON.stringify(value) === '""'
}

module.exports = isEmptyString
