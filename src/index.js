//@ts-check

const removeTicks = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

/**
 * Gets amount of VOWELS in a string.
 * @param {string} word A word.
 * @param {boolean} repetitions Optional. Consider repetitions of chars.
 * @returns {number} Amount of vowels.
 */
const countVowels = (word, repetitions = true) => {

  if (typeof word != 'string') {
    throw new Error('first parameter is not a type string!');
  }

  // Get an array of vowels. Otherwise get an empty array.
  let matchResult = word.match(/[aeiou]|[áéíóúü]/gi) || [];
  if (repetitions) {
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

/**
 * Gets amount of CONSONANTS in a string.
 * @param {string} word A word.
 * @param {boolean} repetitions Optional. Consider repetitions of chars.
 * @returns {number} Amount of consonants.
 */
const countConsonants = (word, repetitions = true) => {

  if (typeof word != 'string') {
    throw new Error('first parameter is not a type string!');
  }

  // Get an array of consonants. Otherwise get an empty array.
  let matchResult = word.match(/(?![aeiou])[a-zñ]/gi) || [];
  if (repetitions) {
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

/**
 * Gets amount of NUMBERS in a string.
 * @param {string} word A word.
 * @param {boolean} repetitions Optional. Consider repetitions of chars.
 * @returns {number} Amount of numbers.
 */
const countNumbers = (word, repetitions = true) => {

  if (typeof word != 'string') {
    throw new Error('first parameter is not a type string!');
  }
  
  // Get an array of numbers. Otherwise get an empty array.
  const matchResult = word.match(/[0-9]/g) || [];
  if (repetitions) {
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