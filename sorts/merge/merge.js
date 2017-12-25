myArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
mergeSort(myArray);
myArray = [8, 4, 9, 1, 3, 7, 6];
mergeSort(myArray);
myArray = [9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3];
mergeSort(myArray);
myArray = [8, 3, 5, 9, 1, 2, 7];
mergeSort(myArray);

function mergeSort(array) {
    arrayCopy = [];
    for (var i = 0; i < array.length; i++) {
        arrayCopy.push(array[i]);
    }
    sort(array, arrayCopy, 0, array.length - 1);
    arrayString = "";
    for(var i = 0; i < array.length; i++) {
        arrayString += array[i] + ", ";
    }
    console.log(arrayString);
}

function sort(array, arrayCopy, lo, hi) {
    if (hi <= lo) return;
    var mid = Math.floor(lo + (hi - lo) / 2);
    sort(array, arrayCopy, lo, mid);
    sort(array, arrayCopy, mid + 1, hi);
    merge(array, arrayCopy, lo, mid, hi);
}

function merge(array, arrayCopy, lo, mid, hi) {
    var i = lo;
    var j = mid + 1;
    for (var k = lo; k <= hi; k++) {
        arrayCopy[k] = array[k];
    }
    for (var k = lo; k <= hi; k++) {
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
