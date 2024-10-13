// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let spaces = n - 1
    let symbols = 1
    for(let i = 0; i < n; i++){
        let cur = ""
        for(let j = 0; j < spaces; j++) cur += ' '
        for(let j = 0; j < symbols; j++) cur += '#'
        for(let j = 0; j < spaces; j++) cur += ' '
        spaces--
        symbols+=2
        console.log(cur);
        
    }
}

module.exports = pyramid;
