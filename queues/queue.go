package main

import "fmt"

// Queue represents a queue data structure
type Queue struct {
	first *Node
	last  *Node
	num   int
}

// Node represents a linked list data structure
type Node struct {
	value int
	next  *Node
}

// Enqueue implements queue.Enqueue: appends value to the end of the queue
func (q *Queue) Enqueue(value int) {
	n := Node{value: value, next: nil}
	if q.last != nil {
		q.last.next = &n
	}
	q.last = &n
	if q.first == nil {
		q.first = &n
	}
	q.num++
}

// Dequeue implements queue.Dequeue: removes and returns the value at the front of the queue
// NOTE: For use in production, you would probably want dequeue to return an error on underflow
func (q *Queue) Dequeue() Node {
	n := q.first
	q.first = n.next
	q.num--
	return *n
}

// Size returns number of elements on queue
func (q Queue) Size() int {
	return q.num
}

// IsEmpty returns if there are zero elements on queue
func (q Queue) IsEmpty() bool {
	return q.num == 0
}

func main() {
	theQueue := Queue{}
	theQueue.Enqueue(3)
	theQueue.Enqueue(2)
	theQueue.Enqueue(1)
	fmt.Println(theQueue.Size())          // should print 3
	fmt.Println(theQueue.Dequeue().value) // should print 3
	fmt.Println(theQueue.Size())          // should print 2
	fmt.Println(theQueue.Dequeue().value) // should print 2
	fmt.Println(theQueue.Size())          // should print 1
	fmt.Println(theQueue.Dequeue().value) // should print 1
	fmt.Println(theQueue.Size())          // should print 0
}
