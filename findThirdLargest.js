function findThirdLargest(nums){
	let firstMax = 0;
	for(let i=0; i<nums.length; i++){
		if(nums[i] > firstMax){
			firstMax = nums[i];
		}
	}
	let secMax = 0;
	for(let i=0; i<nums.length; i++){
		if(secMax<nums[i] && secMax<firstMax && nums[i] < firstMax){
			secMax = nums[i];
		}
	}
	let thirdMax = 0;
	for(let i=0; i<nums.length; i++){
		if(thirdMax< nums[i] && thirdMax < secMax && nums[i] < secMax){
			thirdMax = nums[i];
		}
	}
	return thirdMax;
}


console.log(findThirdLargest([1,2,3,22,4,5,13,30,6,7,8,9,10]));