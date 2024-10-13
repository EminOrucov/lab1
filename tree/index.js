// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

const Queue = require("./queue")

class Node {
    constructor(val){
        this.data = val
        this.children = []
    }
    
    add(child){
        this.children.push(new Node(child))
    }
    
    remove(child){
        this.children = this.children.filter(c => c.data !== child)
    }
}

function DFS(node, f){
    f(node)
    for(let ch of node.children){
        DFS(ch, f)
    }
}

function BFS(node, f){
    let q = new Queue();
    q.push(node);
    while(q.size()){
        let cur = q.pop();
        f(cur)
        for(let ch of cur.children){
            q.push(ch)
        }
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    traverseBF(f){
        BFS(this.root, f)
    }

    traverseDF(f){
        DFS(this.root, f)
    }
}

module.exports = { Tree, Node };
