function quicksort (array) {
    shuffle(array);
    sort(array, 0, array.length - 1);
    print(array);
}

function shuffle(array) {
    var temp, offset;
    for (var i = 0; i < array.length - 1; i++) {
        temp = array[i];
        j = i + Math.floor(Math.random() * (array.length - i));
        array[i] = array[j];
        array[j] = temp;
    }
}

function sort(array, lo, hi) {
    if (hi <= lo) {
        return;
    }
    var j = partition(array, lo, hi);
    sort(array, lo, j - 1);
    sort(array, j + 1, hi);
}

function print(array) {
    var finalOrder = "";
    array.forEach(function(value) {
        finalOrder += value + ", ";
    });
    console.log(finalOrder);
}

function partition(array, lo, hi) {
    var i, j, v;
    i = lo;
    j = hi + 1;
    v = array[lo];
    while (true) {
        while(array[++i] < v) {
            if (i == hi) {
                break;
            }
        }
        while(v < array[--j]) {
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

function exchange(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

array1 = [8, 4, 9, 1, 3, 7, 6];
quicksort(array1);
array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
quicksort(array2);
array3 = [9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3];
quicksort(array3);
array4 = [8, 3, 5, 9, 1, 2, 7];
quicksort(array4);
