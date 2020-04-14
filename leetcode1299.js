// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

 

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
 

// Constraints:

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5


/**
 * @param {number[]} arr
 * @return {number[]}
 */

 //method 1
var replaceElements = function(arr) {
    let max = 0;
    let res = [];
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] > max){
                max = arr[j];
            }
        }
        res.push(max);
        max = 0;
    }
    res.push(-1);
    return res;
};

//method 2
var replaceElements = function(arr) {
    let max = arr[arr.length-1];
    let res = [];
    for(let i=arr.length-2; i>-1; i--){
        res[i] = max;
        if(arr[i] > max){
            max = arr[i];
        }
    }
    res.push(-1);
    return res;
};



