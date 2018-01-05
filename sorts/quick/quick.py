import random

def quicksort(array):
    shuffle(array)
    sort(array, 0, len(array)-1)

def shuffle(array):
    i = 0
    while i < len(array) - 1:
        randex = i + random.randint(0, len(array)-i-1)
        temp = array[i]
        array[i] = array[randex]
        array[randex] = temp
        i += 1

def sort(array, lo, hi):
    if hi <= lo:
        return
    j = partition(array, lo, hi)
    sort(array, lo, j-1)
    sort(array, j+1, hi)

def partition(array, lo, hi):
    i = lo
    j = hi + 1
    v = array[lo]
    while True:
        i += 1
        while array[i] < v:
            if i == hi:
                break
            i += 1
        j -= 1
        while v < array[j]:
            if j == lo:
                break
            j -= 1
        if i >= j:
            break
        exchange(array, i, j)
    exchange(array, lo, j)
    return j

def exchange(array, i, j):
    temp = array[i]
    array[i] = array[j]
    array[j] = temp

array1 = [8, 4, 9, 1, 3, 7, 6]
quicksort(array1)
print(array1)
array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
quicksort(array2)
print(array2)
array3 = [9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3]
quicksort(array3)
print(array3)
array4 = [8, 3, 5, 9, 1, 2, 7]
quicksort(array4)
print(array4)
