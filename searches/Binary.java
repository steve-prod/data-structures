public class Binary {

    public static int binarySearch(int[] array, int value) {
        int lo, mid, hi;
        lo = 0;
        hi = array.length - 1;
        while (lo <= hi) {
            mid = lo + (hi - lo) / 2;
            if (value < array[mid]) {
                hi = mid - 1;
            } else if (value > array[mid]) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int result;
        int[] array1 = {1, 3, 4, 6, 7, 8, 9};
        result = binarySearch(array1, 4);
        System.out.println("result: " + result);
        result = binarySearch(array1, 5);
        System.out.println("result: " + result);
        int[] array2 = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        result = binarySearch(array2, 6);
        System.out.println("result: " + result);
        result = binarySearch(array2, 10);
        System.out.println("result: " + result);
        int[] array3 = {3, 5, 7, 9};
        result = binarySearch(array3, 7);
        System.out.println("result: " +result);
        result = binarySearch(array3, 6);
        System.out.println("result: " + result);
        int[] array4 = {1, 2, 3, 5, 7, 8, 9};
        result = binarySearch(array4, 1);
        System.out.println("result: " + result);
        result = binarySearch(array4, 6);
        System.out.println("result: " + result);
        int[] array5 = {1, 3, 5, 7, 9};
        result = binarySearch(array5, 2);
        System.out.println("result: " + result);
    }
}
