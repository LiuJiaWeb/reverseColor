/**
 * @description: 得到互补色
 * @params originalColor: 原始色(16进制色)
 * @return String 互补色
 */
const func = (originalColor) => {
  let color = originalColor

  //去除#
  if (color.includes('#')) {
    color = color.substring(1)
  }

  //长度为3位的缩写值，转为完整6位值
  if (color.length === 3) {
    color = color.replace(/(\w)(\w)(\w)/, '$1$1$2$2$3$3')
  }

  const colorList = color.match(/\w{2}/g) //转为数组

  let result = []

  for (let i = 0; i < colorList.length; i++){
    let cur = 255 - parseInt(colorList[i], 16)
    cur = cur.toString(16)
    if (cur.length === 1) {
      cur = `0${cur}`
    }
    result.push(cur)
  }

  result = `#${result.join('')}`

  return result
}

export default func