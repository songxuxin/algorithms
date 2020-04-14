// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

var decompressRLElist = function(nums) {
    let i = 0;
    let j = 1;
    let res = [];
    while(j != nums.length - 2 && j != nums.length - 1){   
        for(let k=0; k<nums[i];k++){
            res.push(nums[j]);
        }
        i += 2;
        j += 2;
    }
    
    for(let k=0; k<nums[i];k++){
            res.push(nums[j]);
    } 
    
    return res;
};