// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let A = "";
    let B = "";
    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()
    for(i in stringA){
        if(stringA[i] >= 'a' && stringA[i] <= 'z'){
            A += stringA[i];
        }
    }
    for(i in stringB){
        if(stringB[i] >= 'a' && stringB[i] <= 'z'){
            B += stringB[i];            
        }
    }
    A = A.split("").sort().join("");
    B = B.split("").sort().join("");
    
    return A === B
}

module.exports = anagrams;
