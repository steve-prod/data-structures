public class Insertion {

    public static void main(String[] args) {
        int[] array1 = {9, 8, 7, 6, 5, 4, 3, 2, 1};
        insertionSort(array1);
        int[] array2 = {8, 4, 9, 1, 3, 7, 6};
        insertionSort(array2);
        int[] array3 = {9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3};
        insertionSort(array3);
        int[] array4 = {8, 3, 5, 9, 1, 2, 7};
        insertionSort(array4);
    }

    public static void insertionSort(int[] array) {
        int temp, i, j;
        boolean isSmallest;
        for (i = 1; i < array.length; i++) {
            temp = array[i];
            isSmallest = true;
            for (j = i - 1; j >= 0; j--) {
                if (array[j] > temp) {
                    array[j + 1] = array[j];
                } else {
                    array[j+1] = temp;
                    isSmallest = false;
                    break;
                }
            }
            if(isSmallest) {
                array[j + 1] = temp;
            }
        }
        for(i = 0; i < array.length; i++) {
            System.out.print(array[i] + ", ");
        }
        System.out.println();
    }

}
