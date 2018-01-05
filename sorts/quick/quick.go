package main

import (
    "fmt"
    "math/rand"
    )

func main() {
    array1 := [7]int{8, 4, 9, 1, 3, 7, 6}
    quicksort(array1[:])
    fmt.Println(array1)
    array2 := [9]int{9, 8, 7, 6, 5, 4, 3, 2, 1}
    quicksort(array2[:])
    fmt.Println(array2)
    array3 := [12]int{9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3}
    quicksort(array3[:])
    fmt.Println(array3)
    array4 := [7]int{8, 3, 5, 9, 1, 2, 7}
    quicksort(array4[:])
    fmt.Println(array4)
}

func quicksort(array []int) {
    shuffle(array)
    sort(array, 0, len(array) - 1)
}

func shuffle(array []int) {
    var temp, randex int
    for i := 0; i < len(array) - 2; i++ {
        randex = i + rand.Intn(len(array) - i)
        temp = array[i]
        array[i] = array[randex]
        array[randex] = temp
    }
}

func sort(array []int, lo int, hi int) {
    if hi <= lo {
        return
    }
    j := partition(array, lo, hi)
    sort(array, lo, j-1)
    sort(array, j+1, hi)
}

func partition(array []int, lo int, hi int) int {
    i := lo
    j := hi + 1
    v := array[lo]
    for true {
        i++
        for array[i] < v {
            if i == hi {
                break
            }
            i++
        }
        j--
        for v < array[j] {
            if j == lo {
                break
            }
            j--
        }
        if i >= j {
            break
        }
        exchange(array, i, j)
    }
    exchange(array, lo, j)
    return j
}

func exchange(array []int, i int, j int) {
    temp := array[i]
    array[i] = array[j]
    array[j] = temp
}
