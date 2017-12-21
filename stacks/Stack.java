public class Stack<T> {
    private Node first;
    private int num;

    private class Node {
        T value;
        Node next;
    }

    public void push(T value) {
        Node newNode = new Node();
        newNode.value = value;
        newNode.next = first;
        first = newNode;
        num++;
    }

    public Node pop() {
        Node topNode = first;
        first = topNode.next;
        num--;
        return topNode;
    }

    public int size() {
        return num;
    }

    public boolean isEmpty() {
        return num == 0;
    }

    public static void main(String[] args) {
        Stack theStack = new Stack<Integer>();
        theStack.push(3);
        theStack.push(2);
        theStack.push(1);
        System.out.println("Size: " + theStack.size());
        System.out.println("isEmpty: " + theStack.isEmpty());
        System.out.println("Popped value: " + theStack.pop().value);
        System.out.println("Size: " + theStack.size());
        System.out.println("isEmpty: " + theStack.isEmpty());
        System.out.println("Popped value: " + theStack.pop().value);
        System.out.println("Size: " + theStack.size());
        System.out.println("isEmpty: " + theStack.isEmpty());
        System.out.println("Popped value: " + theStack.pop().value);
        System.out.println("Size: " + theStack.size());
        System.out.println("isEmpty: " + theStack.isEmpty());
        // System.out.println("Popped value: " + theStack.pop().value); // NullPointerException
    }

}
