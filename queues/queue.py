class Queue:

    first = None
    last = None
    num = 0

    def __init__(self):
        self.first = None
        self.last = None
        self.num = 0

    def enqueue(self, value):
        newNode = Node(value, None)
        if self.last != None:
            self.last.next = newNode
        self.last = newNode
        if self.first == None:
            self.first = newNode
        self.num += 1

    # NOTE: In production, you'll want to return an error on underflow
    def dequeue(self):
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

myQueue = Queue()
myQueue.enqueue(3)
myQueue.enqueue(2)
myQueue.enqueue(1)
print("Size: " + str(myQueue.size()))
print("isEmpty:" + str(myQueue.isEmpty()))
print("")
#
print("Value: " + str(myQueue.dequeue().value))
print("Size: " + str(myQueue.size()))
print("isEmpty:" + str(myQueue.isEmpty()))
print("")
#
print("Value: " + str(myQueue.dequeue().value))
print("Size: " + str(myQueue.size()))
print("isEmpty:" + str(myQueue.isEmpty()))
print("")
#
print("Value: " + str(myQueue.dequeue().value))
print("Size: " + str(myQueue.size()))
print("isEmpty:" + str(myQueue.isEmpty()))
