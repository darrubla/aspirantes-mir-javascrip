const join = (arr) => {
  const str = JSON.stringify(arr)
  const regex1 = /[\[|\]|\"]/g
  const newStr = str.replaceAll(regex1, '').replaceAll(',', ' ')
  return newStr
}

console.log(join([1, 3, 2])) // '1 3 2'
console.log(join([10, 9, 8, 7, 6, 5, 4])) // '10 9 8 7 6 5 4'
console.log(join(['t', 'e', 's', 't'])) // 't e s t'
