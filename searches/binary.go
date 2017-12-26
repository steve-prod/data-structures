package main

import "fmt"

func main() {
	var result int
	array1 := [7]int{1, 3, 4, 6, 7, 8, 9}
	result = binarySearch(array1[:], 4)
	fmt.Printf("result: %d\n", result)
	result = binarySearch(array1[:], 5)
	fmt.Printf("result: %d\n", result)
	array2 := [9]int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	result = binarySearch(array2[:], 6)
	fmt.Printf("result: %d\n", result)
	result = binarySearch(array2[:], 10)
	fmt.Printf("result: %d\n", result)
	array3 := [4]int{3, 5, 7, 9}
	result = binarySearch(array3[:], 7)
	fmt.Printf("result: %d\n", result)
	result = binarySearch(array3[:], 6)
	fmt.Printf("result: %d\n", result)
	array4 := [7]int{1, 2, 3, 5, 7, 8, 9}
	result = binarySearch(array4[:], 1)
	fmt.Printf("result: %d\n", result)
	result = binarySearch(array4[:], 6)
	fmt.Printf("result: %d\n", result)
	array5 := [5]int{1, 3, 5, 7, 9}
	result = binarySearch(array5[:], 2)
	fmt.Printf("result: %d\n", result)
}

func binarySearch(array []int, value int) int {
	var lo, mid, hi int
	lo = 0
	hi = len(array) - 1
	for lo <= hi {
		mid = lo + (hi-lo)/2
		if value < array[mid] {
			hi = mid - 1
		} else if value > array[mid] {
			lo = mid + 1
		} else {
			return mid
		}
	}
	return -1
}
