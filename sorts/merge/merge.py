def merge_sort(array):
    arrayCopy = []
    for index in range(0,len(array)):
        arrayCopy.append(array[index])
    sort(array, arrayCopy, 0, len(array)-1)

def sort(array, array_copy, lo, hi):
    if hi <= lo:
        return
    mid = lo + (hi - lo) / 2
    sort(array, array_copy, lo, mid)
    sort(array, array_copy, mid+1, hi)
    merge(array, array_copy, lo, mid, hi)

def merge(array, array_copy, lo, mid, hi):
    i = lo
    j = mid + 1
    for index in range(lo, hi + 1):
        array_copy[index] = array[index]
    for k in range(lo, hi + 1):
        if i > mid:
            array[k] = array_copy[j]
            j += 1
        elif j > hi:
            array[k] = array_copy[i]
            i += 1
        elif array_copy[j] < array_copy[i]:
            array[k] = array_copy[j]
            j += 1
        else:
            array[k] = array_copy[i]
            i += 1

array1 = [8, 3, 5, 9, 1, 2, 7]
merge_sort(array1)
print(array1)
array2 = [9, 8, 7, 6, 5, 4, 3, 2 ,1]
merge_sort(array2)
print(array2)
array3 = [9, 9, 9, 7, 5, 7, 3, 7, 3, 5, 3]
merge_sort(array3)
print(array3)
