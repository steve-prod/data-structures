def insertion_sort(array):
    i, j = 0, 0
    isSmallest = True
    for i in range(1, len(array)):
        temp = array[i]
        isSmallest = True
        for j in range(i - 1, -1, -1):
            if array[j] > temp:
                array[j + 1] = array[j]
            else:
                array[j+1] = temp
                isSmallest = False
                break
        if isSmallest:
            array[j] = temp


array1 = [8, 3, 5, 9, 1, 2, 7]
insertion_sort(array1)
print(array1)
array2 = [9, 8, 7, 6, 5, 4, 3, 2 ,1]
insertion_sort(array2)
print(array2)
array3 = [9, 9, 9, 7, 5, 7, 3, 7, 3, 5, 3]
insertion_sort(array3)
print(array3)
