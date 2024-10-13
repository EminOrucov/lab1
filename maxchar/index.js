// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let cnt = new Map();
    for(let c of str){
        if(!cnt.get(c)) cnt.set(c, 0)
        cnt.set(c, cnt.get(c) + 1)
    }
    let mx = str[0]
    for(let i of cnt.keys()){
        if(cnt.get(i) > cnt.get(mx)){
            mx = i
        }
    }    
    return mx
}

module.exports = maxChar;
