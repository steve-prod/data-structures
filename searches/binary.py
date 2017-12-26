def binarySearch(array, value):
    lo = 0
    hi = len(array) - 1
    while lo <= hi:
        mid = lo + (hi - lo) / 2
        if value < array[mid]:
            hi = mid - 1
        elif value > array[mid]:
            lo = mid + 1
        else:
            return mid
    return - 1

array1 = [1, 3, 4, 6, 7, 8, 9]
result = binarySearch(array1, 4)
print("result: %d\n" % result)
result = binarySearch(array1, 5)
print("result: %d\n" % result)
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
result = binarySearch(array2, 6)
print("result: %d\n" % result)
result = binarySearch(array2, 10)
print("result: %d\n" % result)
array3 = [3, 5, 7, 9]
result = binarySearch(array3, 7)
print("result: %d\n" % result)
result = binarySearch(array3, 6)
print("result: %d\n" % result)
array4 = [1, 2, 3, 5, 7, 8, 9]
result = binarySearch(array4, 1)
print("result: %d\n" % result)
result = binarySearch(array4, 6)
print("result: %d\n" % result)
array5 = [1, 3, 5, 7, 9]
result = binarySearch(array5, 2)
print("result: %d\n" % result)
