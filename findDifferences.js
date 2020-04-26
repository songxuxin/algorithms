let findDifferences = (nums, diff) => {
	let mySet = new Set();
	let res = [];

	for(let i=0; i<nums.length; i++){
		let different = Math.abs(nums[i] - diff);
		let sum = nums[i] + diff;

		if(mySet.has(different)){
			res.push([nums[i], different]);
		}else if(mySet.has(sum)){
			res.push([nums[i], sum]);
		}

		mySet.add(nums[i]);	

	}

	return res;
}

//[ [100, 50] ]
console.log(findDifferences([9, 29,10, 2, 50, 24, 100], 50));
//[ [ 0, 50 ], [ 0, 50 ], [ 52, 2 ], [ 100, 50 ] ]
console.log(findDifferences([9, 29,10, 2, 50, 0, 0, 52, 24, 100], 50));
//[ [ 29, 29 ], [ 0, 0 ] ]
console.log(findDifferences([9,29,29,10,2,50,0,0,52,100], 0));