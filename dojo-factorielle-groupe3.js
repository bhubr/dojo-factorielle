
const assert = require('assert')
// function factorial(n) {
//   let resultat = 1
//   for (let i = 0 ; i < n ; i++) {
//     resultat = resultat * (i+1)
//   }
//   return  resultat
// }

// function factorial(n) {
//   if (n === 0){
//     return 1
//   }
//   return n * factorial (n-1)
// }

// Exo codingame vu par Alexandre.
// Corriger cette fonction qui comporte deux erreurs
// function factorial(n) {
//   if (n = 0) {
//     return 1
//   }
//   return n * factorial (n)
// }

const factorial = (n) => n === 0 ? 1 : n*factorial(n-1) 

console.log(factorial(4))
console.log(factorial(1))
console.log(factorial(0))


// assert.strictEqual(actual, expected[, message])
assert.strictEqual(factorial(5), 120, 'FAIL')
assert.strictEqual(factorial(0), 1, 'FAIL')
assert.strictEqual(factorial(1), 1, 'FAIL')
