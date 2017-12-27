package main

import "fmt"

func main() {
	array1 := [9]int{9, 8, 7, 6, 5, 4, 3, 2, 1}
	shell(array1[:])
	fmt.Println(array1)
	array2 := [7]int{8, 4, 9, 1, 3, 7, 6}
	shell(array2[:])
	fmt.Println(array2)
	array3 := [12]int{9, 9, 9, 7, 7, 5, 3, 5, 7, 5, 3, 3}
	shell(array3[:])
	fmt.Println(array3)
	array4 := [7]int{8, 3, 5, 9, 1, 2, 7}
	shell(array4[:])
	fmt.Println(array4)
}

func shell(array []int) {
	h := 1
	for h < len(array)/3 {
		h = 3*h + 1
	}
	for h >= 1 {
		for i := h; i < len(array); i++ {
			for j := i; j >= h && array[j] < array[j-h]; j -= h {
				temp := array[j]
				array[j] = array[j-h]
				array[j-h] = temp
			}
		}
		h = h / 3
	}
}
