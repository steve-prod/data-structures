package main

import "fmt"

func main() {
	array1 := [7]int{8, 4, 9, 1, 3, 7, 6}
	insertionSort(array1[:])
	fmt.Println(array1)
	array2 := [9]int{9, 8, 7, 6, 5, 4, 3, 2, 1}
	insertionSort(array2[:])
	fmt.Println(array2)
	array3 := [12]int{9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3}
	insertionSort(array3[:])
	fmt.Println(array3)
	array4 := [7]int{8, 3, 5, 9, 1, 2, 7}
	insertionSort(array4[:])
	fmt.Println(array4)
}

func insertionSort(array []int) {
	var temp, i, j int
	for i = 1; i < len(array); i++ {
		temp = array[i]
		for j = i - 1; j >= 0; j-- {
			if array[j] > temp {
				array[j+1] = array[j]
			} else {
				break
			}
		}
		array[j+1] = temp
	}
}
