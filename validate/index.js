// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    let L = true
    let R = true
    let ok = true
    if(min && node.data < min) ok = false
    if(max && node.data > max) ok = false
    if(node.left != null){
        L = validate(node.left, min, node.data)
    }
    if(node.right != null){
        R = validate(node.right, node.data, max)
    }
    
    return L && R && ok
}

module.exports = validate;
