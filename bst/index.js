// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(n){
        this.data = n;
        this.left = null;
        this.right = null;
    }

    insert(n) {
        let cur = this;
        let newNode = {data: n, left: null, right: null};
        while(true){
            if(cur.data > n){
                if(!cur.left){
                    cur.left = newNode;
                    break;
                }
                cur = cur.left
            }
            else{
                if(!cur.right){
                    cur.right = newNode;
                    break;
                }
                cur = cur.right
            }
        }
    }

    contains(n){
        let cur = this;
        while(cur != null && cur.data != n){
            if(cur.data > n){
                cur = cur.left
            }
            else{
                cur = cur.right
            }
        }
        return cur
    }
}

module.exports = Node;
