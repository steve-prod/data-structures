function insertionSort(array) {
    var temp, i, j;
    for (i =  1; i < array.length; i++) {
        temp = array[i];
        for (j = i - 1; j >= 0; j--) {
            if (array[j] > temp) {
                array[j+1] = array[j];
            } else {
                break;
            }
            array[j] = temp;            
        }
    }
    prettyPrint = "";
    for (var i = 0; i < array.length; i++) {
        prettyPrint += array[i] + " "
    }
    console.log(prettyPrint);
}

myArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
insertionSort(myArray);
myArray = [8, 4, 9, 1, 3, 7, 6];
insertionSort(myArray);
myArray = [9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3];
insertionSort(myArray);
myArray = [8, 3, 5, 9, 1, 2, 7];
insertionSort(myArray);
