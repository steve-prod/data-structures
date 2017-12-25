public class Merge {

    private static int[] arrayCopy;

    public static void main(String[] args) {
        int[] array1 = {9, 8, 7, 6, 5, 4, 3, 2, 1};
        mergeSort(array1);
        int[] array2 = {8, 4, 9, 1, 3, 7, 6};
        mergeSort(array2);
        int[] array3 = {9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3};
        mergeSort(array3);
        int[] array4 = {8, 3, 5, 9, 1, 2, 7};
        mergeSort(array4);
    }

    public static void mergeSort(int[] array) {
        arrayCopy = new int[array.length];
        sort(array, 0, array.length - 1);
        for(int i = 0; i < array.length; i++) {
            System.out.print(array[i] + ", ");
        }
        System.out.println();
    }

    public static void sort(int[] array, int lo, int hi) {
        if (hi <= lo) return;
        int mid = lo + (hi - lo) / 2;
        sort(array, lo, mid);
        sort(array, mid + 1, hi);
        merge(array, lo, mid, hi);
    }

    public static void merge(int[] array, int lo, int mid, int hi) {
        int i = lo;
        int j = mid + 1;
        for(int k = lo; k <= hi; k++) {
            arrayCopy[k] = array[k];
        }
        for(int k = lo; k <= hi; k++) {
            if (i > mid) {
                array[k] = arrayCopy[j++];
            } else if (j > hi) {
                array[k] = arrayCopy[i++];
            } else if (arrayCopy[j] < arrayCopy[i]) {
                array[k] = arrayCopy[j++];
            } else {
                array[k] = arrayCopy[i++];
            }
        }
    }
}
