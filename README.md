# Dojo Factorielle

La fonction factorielle se définit comme ceci:

* 5! = 5 * 4!
* 4! = 4 * 3!
* 3! = 3 * 2!
* 2! = 2 * 1!
* 1! = 1 * 0!

Et 0! est donnée et vaut toujours 1.

Donc:
* 1! vaut 1
* 2! vaut 2
* 3! vaut 6
* 4! vaut 24!
* 5! vaut 120!

Différentes méthodes de résolution existent (extraits de vos travaux en dojo) !

## Boucle "descendante"

```javascript
const factorielle = (nombre) => {
  let resultat = nombre
  if (nombre === 0) {
    return 1
  }

  for (i = nombre - 1; i > 0; i--) {
    resultat *= i
  }
return resultat
}
```

## Fonction "récursive"

Récursivité : quand une fonction s'appelle elle-même

```javascript
const factorielle = nombre => {
  if(nombre === 0){
    return 1
  }
  return nombre * factorielle(nombre-1)
}
```

## Fonction récursive la plus courte !

```javascript
const factorielle = nombre => nombre === 0 ? 1 : nombre * factorielle(nombre-1)
```