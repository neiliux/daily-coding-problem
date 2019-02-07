// Problem 192
// You are given an array of nonnegetive integers. You start at the beginning of the array
// and are trying to advanced to the end. You can advance at most the number of steps that
// you are currently on. Determine whether you can get to the end of the array.

// For example: [1,3,1,2,0,1] -> true
// index 0 -> 1 -> 3 -> 5
// For example: [1,2,1,0,0] -> false

// Runtime: O(n)
// Space: O(1)
// My first implementation had a runtime of O(nk)) and space of O(nk)
// n -> number of elements in array, k -> largest integer in array
// In this implementation we iterated over each possible permutation
//
// Optimal solution:
// We look at each integer in the array, 
// for each we determine if we can get past our current
// max advance we have travelled so far. We use the largest jump
// we can make for each advancement (the value at the index). We know for certain
// if we can make the jump then we can make any smaller jump from the value.
// If we find a new max we store it, if the max is >= our # of elements in the array
// we know we can get to the end, if not, we can not get to the end
// One caveat to this algorithm is if i (index into array) exceeds our current
// max value then we know we can not reach the end so lets break early.
function canWalkToEnd(arr) {
  let maxSoFar = 0;
  for (let i=0; i<arr.length; i++) {
    const val = arr[i];
    if (i > maxSoFar) break;
    maxSoFar = Math.max(maxSoFar, i + val);
  }
  return maxSoFar >= arr.length-1;
}

const arr = [1,2,0,2,1,0];
const result = canWalkToEnd(arr);
console.log('result is', result);

