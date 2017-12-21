package main

import "fmt"

// Stack represents a stack data structure
type Stack struct {
	first *Node
	num   int
}

// Node represents a linked list data structure
type Node struct {
	value int
	next  *Node
}

// Push implements stack.Push: pushes value onto the stack
func (s *Stack) Push(value int) {
	n := Node{value: value, next: s.first}
	s.first = &n
	s.num++
}

// Pop implements stack.Pop: removes and returns the top value from stack
func (s *Stack) Pop() Node {
	n := s.first
	s.first = n.next
	s.num--
	return *n
}

// Size returns number of elements on stack
func (s Stack) Size() int {
	return s.num
}

// IsEmpty returns if there are zero elements on stack
func (s Stack) IsEmpty() bool {
	return s.num == 0
}

func main() {
	theStack := Stack{}
	theStack.Push(3)
	theStack.Push(2)
	theStack.Push(1)
	fmt.Println(theStack.Size())      // should print 3
	fmt.Println(theStack.Pop().value) // should print 1
	fmt.Println(theStack.Size())      // should print 2
	fmt.Println(theStack.Pop().value) // should print 2
	fmt.Println(theStack.Size())      // should print 1
	fmt.Println(theStack.Pop().value) // should print 3
	fmt.Println(theStack.Size())      // should print 0
}
