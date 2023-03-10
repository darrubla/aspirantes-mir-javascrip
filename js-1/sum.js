function suma(k) {
  let sum = 0
  for (let i = 1; i <= k; i++) {
    sum += i
  }
  return sum
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120
