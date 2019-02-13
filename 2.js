// Problem 2
//
// Given an array of integers, return a new array such that each 
// element at index i of the new array is the product of all the
// numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected
// output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1],
// the expected output would be [2, 3, 6].
//
// Now, assume you can NOT use division in your solution. How would you solve?

// My initial solution is to create two arrays, prefix and suffix.
// prefix would contain the calculated product at each index moving left-to-right in the source array
// suffix would contain the calculated product at each index moving right-to-left in the source array
// Calculating the resulting products would be iterating over the source and multipying the ith-1 and ith+1 
// from prefix and suffix
//
// Given the below implementation:
// Our runtime is O(N) (technically, O(N+N+N) since we are iterating three times)
// Our space is O(N) (technically, O(N+N+N) since we are creating three arrays)
// We could merge the first two loops into a single loop reducing our runtime down to O(N+N) still O(N)

function calculateProducts(arr) {
 let prefix = [];
 let multiplier = 1;
 for (let i=0; i<arr.length; i++) {
  multiplier *= arr[i];
  prefix.push(multiplier);
 }

 let suffix = [];
 multiplier = 1;
 for (let i=arr.length-1; i>=0; i--) {
  multiplier *= arr[i];
  suffix.unshift(multiplier);
 }

 console.log('prefix', prefix);
 console.log('suffix', suffix);
 let result = [];
 for (let i=0; i<arr.length; i++) {
   const prefixVal = prefix[i-1] || 1;
   const suffixVal = suffix[i+1] || 1;
   result.push(prefixVal * suffixVal);
 }

 return result;
}

// [1,3,5] => [15,5,3]
const result = calculateProducts([1,3,5]);
console.log(result);

