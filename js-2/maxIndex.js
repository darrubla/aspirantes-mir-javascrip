const maxIndex = (arr) => {
  let idx = -1
  if (arr.length) {
    const max = arr.reduce(
      (prev, curr) => (prev > curr ? prev : curr),
      undefined
    )
    idx = arr.indexOf(max)
  }
  return idx
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
