// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function getLevels(root){
    let level = []
    if(!root) return level
    level.push([])
    level[0].push(root.data)
    for(let i in root.children){
        let to = getLevels(root.children[i])
        for(let j = 0; j < to.length; j++){
            if(level.length <= j + 1) level.push(to[j])
            else {
                for(let k in to[j]) level[j + 1].push(to[j][k])
            }
        }
    }
    console.log(level);
    
    return level
}

function levelWidth(root) {
    let levels = getLevels(root)
    let res = []
    for(let level of levels){
        res.push(level.length)
    }
    return res
}

module.exports = levelWidth;
