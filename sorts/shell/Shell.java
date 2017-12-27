public class Shell {

    public static void main(String[] args) {
        int[] array1 = {9, 8, 7, 6, 5, 4, 3, 2, 1};
        shell(array1);
        int[] array2 = {8, 4, 9, 1, 3, 7, 6};
        shell(array2);
        int[] array3 = {9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3};
        shell(array3);
        int[] array4 = {8, 3, 5, 9, 1, 2, 7};
        shell(array4);
    }

    public static void shell(int[] array) {
        int h = 1;
        while (h < array.length/3) {
            h = 3 * h + 1;
        }
        while (h >= 1) {
            for (int i = h; i < array.length; i++) {
                for (int j = i; j >= h; j -= h) {
                    if (array[j] < array[j-h]) {
                        int temp = array[j];
                        array[j] = array[j-h];
                        array[j-h] = temp;
                    } else {
                        break;
                    }
                }
            }
            h /= 3;
        }
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + ", ");
        }
        System.out.println("");
    }
}
