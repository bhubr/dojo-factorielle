const assert = require('assert')
// const factorielle = (nombre) => {
// let resultat = nombre
// if (nombre === 0) {
//   return 1
// }
//
//   for (i = nombre - 1; i > 0; i--) {
//     resultat *= i
//   }
// return resultat
// }

const factorielle = nombre => {
  if(nombre === 0){
    return 1
  }
  return nombre * factorielle(nombre-1)
}
// 
// function factorial(n) {
//   if(n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// const factorielle = nombre => nombre === 0?1:nombre * factorielle(nombre-1)

console.log(factorielle(5))
console.log(factorielle(1))
console.log(factorielle(0))

assert.strictEqual(factorielle(5), 120, "5! doit donner 120")
assert.strictEqual(factorielle(1), 1, "1! doit donner 1")
assert.strictEqual(factorielle(0), 1, "0! doit donner 1")