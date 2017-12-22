/*
 * Barring the trivial solution of just using a Javascript array (push() for
 * enqueue() and shift() for dequeue()), here a 4 different ways you can create
 * queues in Javascript, one for each method of object instantiation.
 */

/**************************  From object literal  *****************************/
var queueObjLiteral = {
    first: null,
    last: null,
    num: 0,
    enqueue: function(value) {
        var nodeLiteral = {
            value: value,
            next: null
        }
        if (this.last != null) {
            this.last.next = nodeLiteral;
        }
        this.last = nodeLiteral;
        if (this.first === null) {
            this.first = nodeLiteral;
        }
        this.num++;
    },
    // NOTE: In production, you'll want to return an error on underflow
    dequeue: function() {
        var topNode = this.first;
        this.first = topNode.next;
        this.num--;
        return topNode
    },
    size: function() {
        return this.num;
    },
    isEmpty: function()  {
        return this.num === 0;
    },
    toString: function() {
        var that = this;
        console.log("Queue size:", that.size());
        console.log("Is Empty: ", that.isEmpty())
    }
};
/* Uncomment code below to test */
// queueObjLiteral.toString();
// queueObjLiteral.enqueue(3);
// queueObjLiteral.toString();
// queueObjLiteral.enqueue(2);
// queueObjLiteral.toString();
// queueObjLiteral.enqueue(1);
// queueObjLiteral.toString();
// console.log("Popped value: ", queueObjLiteral.dequeue(this).value)
// queueObjLiteral.toString();
// console.log("Popped value: ", queueObjLiteral.dequeue(this).value)
// queueObjLiteral.toString();
// console.log("Popped value: ", queueObjLiteral.dequeue(this).value)
// queueObjLiteral.toString();

/**************************  From named function  *****************************/

function QueueFunction() {
    this.first = null;
    this.last = null;
    this.num = 0;
}
function NodeFunction(value, next) {
    this.value = value;
    this.next = next;
}
QueueFunction.prototype = {
    enqueue: function(value) {
        var that = this;
        var node = new NodeFunction(value, that.first);
        if (that.last != null) {
            that.last.next = node;
        }
        that.last = node;
        if (that.first === null) {
            that.first = node;
        }
        that.num++;
    },
    // NOTE: In production, you'll want to return an error on underflow
    dequeue: function() {
        var topNode = this.first;
        this.first = topNode.next;
        this.num--;
        return topNode;
    },
    size: function() {
        return this.num;
    },
    isEmpty: function() {
        return this.num === 0;
    },
    toString: function() {
        var that = this;
        console.log("Size: ", that.size());
        console.log("Is Empty: ", that.isEmpty());
    }
}
/* Uncomment code below to test */
// var queueNamedFunction = new QueueFunction();
// queueNamedFunction.toString();
// queueNamedFunction.enqueue(3);
// queueNamedFunction.toString();
// queueNamedFunction.enqueue(2);
// queueNamedFunction.toString();
// queueNamedFunction.enqueue(1);
// queueNamedFunction.toString();
// console.log("Popped value: ", queueNamedFunction.dequeue().value)
// queueNamedFunction.toString();
// console.log("Popped value: ", queueNamedFunction.dequeue().value)
// queueNamedFunction.toString();
// console.log("Popped value: ", queueNamedFunction.dequeue().value)
// queueNamedFunction.toString();

/**************************  From object prototype  ***************************/

var queuePrototype = {
    first: null,
    last: null,
    num: 0,
    enqueue: function(value) {
        var node = Object.create(nodePrototype);
        node.value = value;
        node.next = null;
        if (this.last != null) {
            this.last.next = node;
        }
        this.last = node;
        if (this.first === null) {
            this.first = node;
        }
        this.num++;
    },
    // NOTE: In production, you'll want to return an error on underflow
    dequeue: function() {
        topNode = this.first;
        this.first = topNode.next;
        this.num--;
        return topNode;
    },
    size: function() {
        return this.num;
    },
    isEmpty: function() {
        return this.num === 0;
    },
    toString: function() {
        var that = this;
        console.log("Size: ", that.size());
        console.log("Is Empty: ", that.isEmpty());
    }
}
var nodePrototype = {
    value: null,
    next: null
}
/* Uncomment code below to test */
// var queueFromPrototype = Object.create(queuePrototype);
// queueFromPrototype.toString();
// queueFromPrototype.enqueue(3);
// queueFromPrototype.toString();
// queueFromPrototype.enqueue(2);
// queueFromPrototype.toString();
// queueFromPrototype.enqueue(1);
// queueFromPrototype.toString();
// console.log("Popped value: ", queueFromPrototype.dequeue().value);
// queueFromPrototype.toString();
// console.log("Popped value: ", queueFromPrototype.dequeue().value);
// queueFromPrototype.toString();
// console.log("Popped value: ", queueFromPrototype.dequeue().value);
// queueFromPrototype.toString();

/**************************  Using keyword 'class'  ***************************/

class QueueClass {
    constructor() {
        this.first = null;
        this.last = null;
        this.num = 0;
    }
    enqueue(value) {
        var node = new NodeClass(value);
        node.next = null;
        if (this.last != null) {
            this.last.next = node;
        }
        this.last = node;
        if (this.first === null) {
            this.first = node;
        }
        this.num++;
    }
    // NOTE: In production, you'll want to return an error on underflow
    dequeue() {
        var node = this.first;
        this.first = node.next;
        this.num--;
        return node;
    }
    size() {
        return this.num;
    }
    isEmpty() {
        return this.num === 0;
    }
    toString() {
        var that = this;
        console.log("Size: ", that.size());
        console.log("Is Empty: ", that.isEmpty());
    }
}
class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
/* Uncomment code below to test */
// var queueClassInstance = new QueueClass();
// queueClassInstance.toString();
// queueClassInstance.enqueue(3);
// queueClassInstance.toString();
// queueClassInstance.enqueue(2);
// queueClassInstance.toString();
// queueClassInstance.enqueue(1);
// queueClassInstance.toString();
// console.log("Popped value: ", queueClassInstance.dequeue().value);
// queueClassInstance.toString();
// console.log("Popped value: ", queueClassInstance.dequeue().value);
// queueClassInstance.toString();
// console.log("Popped value: ", queueClassInstance.dequeue().value);
// queueClassInstance.toString();
