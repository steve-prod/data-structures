class Stack:

    first = None
    num = 0

    def __init__(self):
        self.first = None
        self.num = 0

    def push(self, value):
        newNode = Node(value, self.first)
        self.first = newNode
        self.num += 1

    def pop(self):
        topNode = self.first
        self.first = topNode.next
        self.num -= 1
        return topNode

    def size(self):
        return self.num

    def isEmpty(self):
        return self.num == 0

class Node:
    def __init__(self, value, nextNode):
        self.value = value
        self.next = nextNode

myStack = Stack()
myStack.push(3)
myStack.push(2)
myStack.push(1)
print("Size: " + str(myStack.size()))
print("isEmpty:" + str(myStack.isEmpty()))
print("")
#
print("Value: " + str(myStack.pop().value))
print("Size: " + str(myStack.size()))
print("isEmpty:" + str(myStack.isEmpty()))
print("")
#
print("Value: " + str(myStack.pop().value))
print("Size: " + str(myStack.size()))
print("isEmpty:" + str(myStack.isEmpty()))
print("")
#
print("Value: " + str(myStack.pop().value))
print("Size: " + str(myStack.size()))
print("isEmpty:" + str(myStack.isEmpty()))
