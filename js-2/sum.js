const sum = (arr) => {
  let result = 0
  for (value of arr) {
    result += value
  }
  return result
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
