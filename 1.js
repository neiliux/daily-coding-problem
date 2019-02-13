// Problem 1
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k

/*
 * Initial brute force algorithm:
 * For each number n in list subtract it from k, m. 
 * Iterate over the list again looking for m. If found, return true
 * Runtime is O(n2), space: O(1)
 *
 * The issue is the 2nd iteration. We can eliminate it entirely by storing
 * the values we have already seen in a hash table. With the table we
 * can reduce our lookup to an O(1) operation
 * Runtime: O(n), space: O(n)
 * 
 * A 3rd implementation is to sort the arr in-place
 * then run a binary search for m. 
 * Runtime: O(n lg n), space: O(1)
 */

function hasTwoValues(arr, k) {
  let hash = {};
  if (!arr || arr.length < 2) return false;
  hash[arr[0]] = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (hash.hasOwnProperty(k-arr[i])) return true;
    hash[arr[i]] = arr[i];
  }
  return false;
}

const result = hasTwoValues([1,2,3,4,5], 9);
console.log(result);

