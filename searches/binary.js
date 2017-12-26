function binarySearch(array, value) {
    var lo, mid, hi
    lo = 0;
    hi = array.length - 1;
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);
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

array1 = [1, 3, 4, 6, 7, 8, 9];
result = binarySearch(array1, 4);
console.log("result: " + result);
result = binarySearch(array1, 5);
console.log("result: " + result);
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
result = binarySearch(array2, 6);
console.log("result: " + result);
result = binarySearch(array2, 10);
console.log("result: " + result);
array3 = [3, 5, 7, 9];
result = binarySearch(array3, 7);
console.log("result: " +result);
result = binarySearch(array3, 6);
console.log("result: " + result);
array4 = [1, 2, 3, 5, 7, 8, 9];
result = binarySearch(array4, 1);
console.log("result: " + result);
result = binarySearch(array4, 6);
console.log("result: " + result);
array5 = [1, 3, 5, 7, 9];
result = binarySearch(array5, 2);
console.log("result: " + result);
