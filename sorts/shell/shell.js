function shell(array) {
    var h = 1;
    while (h < array.length/3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < array.length; i++) {
            for (var j = i; j >= h; j -= h) {
                if (array[j] < array[j-h]) {
                    var temp = array[j];
                    array[j] = array[j-h];
                    array[j-h] = temp;
                } else {
                    break;
                }
            }
        }
        h = Math.floor(h/3);
    }
    var arrayString = "";
    for (var i = 0; i < array.length; i++) {
        arrayString += array[i] + ", ";
    }
    console.log(arrayString);
}

var array1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
shell(array1);
var array2 = [8, 4, 9, 1, 3, 7, 6];
shell(array2);
var array3 = [9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3];
shell(array3);
var array4 = [8, 3, 5, 9, 1, 2, 7];
shell(array4);
