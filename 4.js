// Problem 4
// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3
// You can modify the array in place, if needed.

// Initial thought is to sort the array in-place
// then walk from left to right until we find the first
// positive integer. If it is 1 we know the the missing number is >= 2 so walk
// until we find the missing number.
// Otherwise, if > 1 then the missing number is arr[i]-1
// Runtime: O(N lg N) assuming in-place sort
// Space: O(1)
//
// My understanding of this problem was flawed.
// "find the lowest positive integer that does not exist": I took this this to mean
// the next smallest integer of the set of integers in the array, NOT always starting at 1.
// Given the problem statement the lowest positive integer is a constant at 1
// which means we are trying to find the integer between 1...N
// where N is the length of the array+1 (w/ 0 and negatives filtered out)

// My solutions works, however, the runtime is slower than constraints
function find(arr) {
	arr.sort();
	let i = 0;
	while (i < arr.length && arr[i] < 1) i++;
	if (arr[i] > 1) return arr[i]-1;
	let currentNumber = arr[i];
	let expectedNextNumber = currentNumber+1;
	while (i < arr.length) {
		// Move past all duplicates
		while (arr[i+1] === currentNumber) i++;
		i++;
		if (arr[i] != expectedNextNumber) return expectedNextNumber;
		currentNumber = arr[i];
		expectedNextNumber = currentNumber+1;
	}
}

//const arr = [1,2,0];
//const arr = [3,4,-1,1];
const arr = [5,6,7,8,9];
const result = find(arr);

console.log(result);

