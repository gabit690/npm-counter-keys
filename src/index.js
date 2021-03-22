const removeTicks = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

const countVowels = (word, repetition = true) => {
  // Get an array of vowels. Otherwise get an empty array.
  let matchResult = word.match(/[aeiou]|[áéíóúü]/gi) || [];
  if (repetition) {
    return matchResult.length;
  } else {
    // Change to Lower case the elements of the array.
    matchResult = matchResult.map(element => element.toLowerCase());
    // Take out ticks over the elements of the array.
    const matchWithoutTicks = matchResult.map(element => removeTicks(element));
    // Built an array with unique characters.
    const matchUnique = matchWithoutTicks.filter((element, index) => { 
       return matchWithoutTicks.indexOf(element) === index;
    });
    return matchUnique.length;
  }
};

const countConsonants = (word, repetition = true) => {
  // Get an array of consonants. Otherwise get an empty array.
  let matchResult = word.match(/(?![aeiou])[a-zñ]/gi) || [];
  if (repetition) {
    return matchResult.length;
  } else {
    // Change to Lower case the elements of the array.
    matchResult = matchResult.map(element => element.toLowerCase());
    // Built an array with unique characters.
    const matchUnique = matchResult.filter((element, index) => {
      return matchResult.indexOf(element) === index; 
    });
    return matchUnique.length;
  }
};

const countNumbers = (word, repetition = true) => {
  // Get an array of numbers. Otherwise get an empty array.
  const matchResult = word.match(/[0-9]/g) || [];
  if (repetition) {
    return matchResult.length;
  } else {
    // Built an array with unique characters.
    const matchUnique = matchResult.filter((element, index) => {
      return matchResult.indexOf(element) === index; 
    });
    return matchUnique.length;
  }
};

module.exports = {
  countVowels,
  countConsonants,
  countNumbers
}