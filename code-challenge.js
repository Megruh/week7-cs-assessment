///// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise./////

let zero = false;

const addsToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === 0) {
        zero = true;
      }
    }
  }
  return zero
};
console.log(addsToZero([1, 2, 3]));

//time complexity: O(n^2)
//space complexity: O(1)


/////Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise./////

function isUnique(str) {
    let unique = new Set([])
    for (let i = 0; i < str.length; i++) {
        unique.add(str[i])
    }
    return unique.size === str.length
  }

  console.log(isUnique("Mooonday"));
  console.log(isUnique("Monday"));

//time complexity: O(n)
//space complexity: O(n)


/////A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” Write a function to check a sentence to see if it is a pangram or not./////

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's' ,'t', 'u', 'v', 'w', 'x', 'y', 'z']
let pangram = false
const isPangram = (str) => {
    for (let i = 0; i < alphabet.length; i++){
        if (str.includes(alphabet[i])){
            pangram = true
        } else {
            pangram = false
        }
    }
    return pangram
}
console.log(isPangram("I like cats, but not mice"))

//time complexity: O(1)
//space complexity: O(1)


/////Write a function, find_longest_word, that takes a list of words and returns the length of the longest one./////

const findLongestWord = (arr) => {
    let longestWord = 0
    for (let i = 0; i < arr.length; i++){
       if (arr[i].length > longestWord){
            longestWord = arr[i].length
       }
    }
    return longestWord
}
console.log(findLongestWord(['hi', 'hello', 'heeeyyyy']))

//time complexity: O(n)
//space complexity: O(1)