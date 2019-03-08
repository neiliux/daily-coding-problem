// Problem 224
// Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.
// For example, for the input [1, 2, 3, 10], you should return 7.
// Do this in O(N) time.
//


// Example: [1,2,3,10]
// Create a var that represents our current
// "impossible sum". This var will hold
// what we think our answer is. We will start 
// start the sum at a value of 1 because of the
// requirements.
// for each value in the array we will do:
// 1) if "impossible sum" is < arr[i] we have our answer
// 2) add arr[i] to "impossible sum"

// I missed the final return statement...
// The smallest value might be > then the largest value in the array
//
function find(arr) {
	var currentSum = 1;
	for (let i=0; i<arr.length; i++) {
		if (currentSum < arr[i]) return currentSum;
		currentSum += arr[i];
	}
	return currentSum;
}

const result = find([1,2,3,10]);
const result1 = find([11,12,13]);
const result2 = find([1,2,3,6,7,10]);
console.log(result, result1, result2);

