// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

var findNumbers = function(nums) {
    let res = [];
    let count = 0;
    for(let i=0; i<nums.length; i++){
        let tmp = nums[i];
        while(tmp != 0){
            tmp = parseInt(tmp / 10);
            count ++;
        }
        console.log('count:', count);
        if(count % 2 === 0){
            res.push(nums[i]);
        }
        count = 0;
    }
    return res.length;
};