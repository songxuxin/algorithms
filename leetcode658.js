// Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

// Example 1:
// Input: [1,2,3,4,5], k=4, x=3
// Output: [1,2,3,4]
// Example 2:
// Input: [1,2,3,4,5], k=4, x=-1
// Output: [1,2,3,4]
// Note:
// The value k is positive and will always be smaller than the length of the sorted array.
// Length of the given array is positive and will not exceed 104
// Absolute value of elements in the array and x will not exceed 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let res = []
    if(x < arr[0]){
        return arr.slice(0, k);
    }
    if(x > arr[arr.length-1]){
        return arr.slice(arr.length - k, arr.length);
    }
};

console.log(findClosestElements([1,2,3,4,5], 4, 6));