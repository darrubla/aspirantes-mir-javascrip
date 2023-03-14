const max = (arr) => (
  arr.reduce((prev, curr) => (prev > curr ? prev : curr), undefined)
)

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
