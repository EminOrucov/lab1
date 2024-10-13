// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowel = "aeuio"
    let cnt = 0
    let s = str.toLowerCase()
    for(let char of s){
        if(vowel.includes(char)) cnt++
    }
    return cnt
}

module.exports = vowels;
