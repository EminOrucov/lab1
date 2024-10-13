class Queue {
    constructor(){
        this.data = []
        this.pos = 0
    }

    push(val){
        this.data.push(val)
    }

    pop(){
        return this.data[this.pos++]
    }

    size(){
        return this.data.length - this.pos
    }
}

module.exports = Queue;
