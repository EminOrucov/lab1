// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let cur = list.head
    let visited = new Map();
    let ok = false
    while(cur != null){
        if(visited.get(cur.data)){
            return true
        }
        visited.set(cur.data, 1)
        cur = cur.next
        
    }
    return ok
}
module.exports = circular;
