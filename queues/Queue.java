public class Queue<T> {
    private Node first;
    private Node last;
    private int num;

    private class Node {
        T value;
        Node next;
    }

    public void enqueue(T value) {
        Node newNode = new Node();
        newNode.value = value;
        newNode.next = first;
        if (last != null) {
            last.next = newNode;
        }
        last = newNode;
        if (first == null) {
            first = newNode;
        }
        num++;
    }

    // NOTE: In production, you'll want to throw a specific exception on underflow
    public Node dequeue() {
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
        Queue theQueue = new Queue<Integer>();
        theQueue.enqueue(3);
        theQueue.enqueue(2);
        theQueue.enqueue(1);
        System.out.println("Size: " + theQueue.size());
        System.out.println("isEmpty: " + theQueue.isEmpty());
        System.out.println("Popped value: " + theQueue.dequeue().value);
        System.out.println("Size: " + theQueue.size());
        System.out.println("isEmpty: " + theQueue.isEmpty());
        System.out.println("Popped value: " + theQueue.dequeue().value);
        System.out.println("Size: " + theQueue.size());
        System.out.println("isEmpty: " + theQueue.isEmpty());
        System.out.println("Popped value: " + theQueue.dequeue().value);
        System.out.println("Size: " + theQueue.size());
        System.out.println("isEmpty: " + theQueue.isEmpty());
        // System.out.println("Popped value: " + theQueue.dequeue().value); // NullPointerException
    }

}
