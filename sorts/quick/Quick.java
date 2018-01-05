import java.util.Random;

public class Quick {

    private static Random rng = new Random();

    public static void main(String[] args) {
        int[] array1 = {9, 8, 7, 6, 5, 4, 3, 2, 1};
        quicksort(array1);
        int[] array2 = {8, 4, 9, 1, 3, 7, 6};
        quicksort(array2);
        int[] array3 = {9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3};
        quicksort(array3);
        int[] array4 = {8, 3, 5, 9, 1, 2, 7};
        quicksort(array4);
    }

    private static void quicksort(int[] array) {
        shuffle(array);
        sort(array, 0, array.length - 1);
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + ", ");
        }
        System.out.println("");
    }

    private static void shuffle(int[] array) {
        int randex, temp;
        for(int i = 0; i < array.length - 2; i++) {
            temp = array[i];
            randex = i + rng.nextInt(array.length - i);
            array[i] = array[randex];
            array[randex] = temp;
        }
    }

    private static void sort(int[] array, int lo, int hi) {
        if (hi <= lo) {
            return;
        }
        int j = partition(array, lo, hi);
        sort(array, lo, j - 1);
        sort(array, j + 1, hi);
    }

    private static int partition(int[] array, int lo, int hi) {
        int i = lo;
        int j = hi + 1;
        int v = array[lo];
        while (true) {
            while (array[++i] < v) {
                if (i == hi) {
                    break;
                }
            }
            while (v < array[--j]) {
                if (j == lo) {
                    break;
                }
            }
            if (i >= j) {
                break;
            }
            exchange(array, i, j);
        }
        exchange(array, lo, j);
        return j;
    }

    private static void exchange(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
