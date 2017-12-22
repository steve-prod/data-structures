/*
 * Barring the trivial solution of just using a Javascript array,
 * here a 4 different ways you can create stacks in Javascript, one
 * for each method of object instantiation.
 */

/**************************  From object literal  *****************************/
var stackObjLiteral = {
    first: null,
    num: 0,
    push: function(value) {
        var that = this;
        var nodeLiteral = {
            value: value,
            next: that.first
        }
        that.first = nodeLiteral;
        that.num++;
    },
    // NOTE: In production, you'll want to return an error on underflow
    pop: function() {
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
        console.log("Stack size:", that.size());
        console.log("Is Empty: ", that.isEmpty())
    }
};
/* Uncomment code below to test */
// stackObjLiteral.toString();
// stackObjLiteral.push(3);
// stackObjLiteral.toString();
// stackObjLiteral.push(2);
// stackObjLiteral.toString();
// stackObjLiteral.push(1);
// stackObjLiteral.toString();
// console.log("Popped value: ", stackObjLiteral.pop(this).value)
// stackObjLiteral.toString();
// console.log("Popped value: ", stackObjLiteral.pop(this).value)
// stackObjLiteral.toString();
// console.log("Popped value: ", stackObjLiteral.pop(this).value)
// stackObjLiteral.toString();

/**************************  From named function  *****************************/

function StackFunction() {
    this.first = null;
    this.num = 0;
}
function NodeFunction(value, next) {
    this.value = value;
    this.next = next;
}
StackFunction.prototype = {
    push: function(value) {
        var that = this;
        var node = new NodeFunction(value, that.first);
        that.first = node;
        that.num++;
    },
    // NOTE: In production, you'll want to return an error on underflow
    pop: function() {
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
// var stackNamedFunction = new StackFunction();
// stackNamedFunction.toString();
// stackNamedFunction.push(3);
// stackNamedFunction.toString();
// stackNamedFunction.push(2);
// stackNamedFunction.toString();
// stackNamedFunction.push(1);
// stackNamedFunction.toString();
// console.log("Popped value: ", stackNamedFunction.pop().value)
// stackNamedFunction.toString();
// console.log("Popped value: ", stackNamedFunction.pop().value)
// stackNamedFunction.toString();
// console.log("Popped value: ", stackNamedFunction.pop().value)
// stackNamedFunction.toString();

/**************************  From object prototype  ***************************/

var stackPrototype = {
    first: null,
    num: 0,
    push: function(value) {
        var node = Object.create(nodePrototype);
        node.value = value;
        node.next = this.first;
        this.first = node;
        this.num++;
    },
    // NOTE: In production, you'll want to return an error on underflow
    pop: function() {
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
// var stackFromPrototype = Object.create(stackPrototype);
// stackFromPrototype.toString();
// stackFromPrototype.push(3);
// stackFromPrototype.toString();
// stackFromPrototype.push(2);
// stackFromPrototype.toString();
// stackFromPrototype.push(1);
// stackFromPrototype.toString();
// console.log("Popped value: ", stackFromPrototype.pop().value);
// stackFromPrototype.toString();
// console.log("Popped value: ", stackFromPrototype.pop().value);
// stackFromPrototype.toString();
// console.log("Popped value: ", stackFromPrototype.pop().value);
// stackFromPrototype.toString();

/**************************  Using keyword 'class'  ***************************/

class StackClass {
    constructor() {
        this.first = null;
        this.num = 0;
    }
    push(value) {
        var node = new NodeClass(value);
        node.next = this.first;
        this.first = node;
        this.num++;
    }
    // NOTE: In production, you'll want to return an error on underflow
    pop() {
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
// var stackClassInstance = new StackClass();
// stackClassInstance.toString();
// stackClassInstance.push(3);
// stackClassInstance.toString();
// stackClassInstance.push(2);
// stackClassInstance.toString();
// stackClassInstance.push(1);
// stackClassInstance.toString();
// console.log("Popped value: ", stackClassInstance.pop().value);
// stackClassInstance.toString();
// console.log("Popped value: ", stackClassInstance.pop().value);
// stackClassInstance.toString();
// console.log("Popped value: ", stackClassInstance.pop().value);
// stackClassInstance.toString();
