# **Usage.**

* Functions are case-insensitive.

```js
// Get module
const counter = require('npm-counter-keys');

// Counting NUMBERS with repetitions.
console.log(counter.countNumbers("gabit0800")); //=> 4

// Counting NUMBERS without repetitions.
console.log(counter.countNumbers("gabit0800", false)); //=> 2

// Counting VOWELS with repetitions.
console.log(counter.countVowels("Esdrújula")); //=> 4

// Counting VOWELS without repetitions.
console.log(counter.countVowels("Esdrújula", false)); //=> 3

// Counting CONSONANTS with repetitions.
console.log(counter.countConsonants("Calculus")); //=> 5

// Counting CONSONANTS without repetitions.
console.log(counter.countConsonants("Calculus", false)); //=> 3
```
