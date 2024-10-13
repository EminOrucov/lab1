// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let first = true;
    let res = "";
    for(i in str){
        let char = str[i]
        if(char >= 'a' && char <= 'z'){
            if(first){
                char = str[i].toUpperCase();
                first = false;
            }
        }
        else{
            first = true;
        }
        res += char;
    }
    return res
}

module.exports = capitalize;
