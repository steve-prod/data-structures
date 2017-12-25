package main

import "fmt"

func main() {
	array1 := [7]int{8, 4, 9, 1, 3, 7, 6}
	mergeSort(array1[:])
	fmt.Println(array1)
	array2 := [9]int{9, 8, 7, 6, 5, 4, 3, 2, 1}
	mergeSort(array2[:])
	fmt.Println(array2)
	array3 := [12]int{9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3}
	mergeSort(array3[:])
	fmt.Println(array3)
	array4 := [7]int{8, 3, 5, 9, 1, 2, 7}
	mergeSort(array4[:])
	fmt.Println(array4)
}

func mergeSort(array []int) {
	arrayCopy := make([]int, len(array))
	sort(array, arrayCopy, 0, len(array)-1)
}

func sort(array []int, arrayCopy []int, lo int, hi int) {
	if hi <= lo {
		return
	}
	mid := lo + (hi-lo)/2
	sort(array, arrayCopy, lo, mid)
	sort(array, arrayCopy, mid+1, hi)
	merge(array, arrayCopy, lo, mid, hi)
}

func merge(array []int, arrayCopy []int, lo int, mid int, hi int) {
	i := lo
	j := mid + 1
	for i, v := range array {
		arrayCopy[i] = v
	}
	for k := lo; k <= hi; k++ {
		if i > mid {
			array[k] = arrayCopy[j]
			j++
		} else if j > hi {
			array[k] = arrayCopy[i]
			i++
		} else if arrayCopy[j] < arrayCopy[i] {
			array[k] = arrayCopy[j]
			j++
		} else {
			array[k] = arrayCopy[i]
			i++
		}
	}
}
