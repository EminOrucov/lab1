// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let neg = 1
    let cpn = n
    let res = 0
    if(n < 0){
        cpn = -n
        neg = -1
    }
    while(cpn > 0){
        res = res * 10 + cpn % 10
        cpn = Math.floor(cpn / 10)
        
    }
    return neg * res
}

module.exports = reverseInt;
