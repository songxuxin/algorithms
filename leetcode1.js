// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let myMap = new Map();
    
    for(let i=0; i < nums.length; i++){
        let j = target - nums[i];
        if(myMap.has(j)){
            return [i, myMap.get(j)];
        }
        myMap.set(nums[i], i);
    }
    return [];
};

console.log(twoSum([6,2,5,13,7], 9));

//if the question only wants to out put numbers, not index
var twoSum2 = function(nums, target){
	nums.sort( (a, b) => a - b);
	let left = 0;
	let right = nums.length - 1;
	while(left < right){
		if(nums[left] + nums[right] === target){
			return [nums[left], nums[right]];
		}else if(nums[left] + nums[right] < target){
			left++;
		}else{
			right--;
		}
	}
	return [];
}

console.log(twoSum2([6,2,5,13,7], 9));

//method use object map = {}
var twoSum3 = function(nums, target){
	let map = {};
	for(let i = 0; i<nums.length; i++){
		let secNumber = target - nums[i];
		if(map[secNumber]){
			return [i, map[secNumber]];
		}
		map[nums[i]] = i;
	}
	return [];
}
console.log(twoSum3([6,2,5,13,7], 9));

















