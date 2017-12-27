def shell(array):
    h = 1
    while h < len(array)/3:
        h = 3 * h + 1
    while h >= 1:
        # move to the right
        i = h
        while i < len(array):
            # move to the left
            j = i
            while j >= h:
                if array[j] < array[j-h]:
                    temp = array[j]
                    array[j] = array[j-h]
                    array[j-h] = temp
                else:
                    break
                j -= h
            i += 1
        h = h/3


array1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
shell(array1)
print(array1)
array2 = [8, 4, 9, 1, 3, 7, 6]
shell(array2)
print(array2)
array3 = [9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3]
shell(array3)
print(array3)
array4 = [8, 3, 5, 9, 1, 2, 7]
shell(array4)
print(array4)
