const countAppearance = function(nums){
	let myMap = new Map();
	for(let i=0; i<nums.length; i++){
		if(myMap.has(nums[i])){
			myMap.set(nums[i], myMap.get(nums[i])+1);
		}else{
			myMap.set(nums[i], 1);
		}
	}
	let res = [];
	myMap.forEach( (value, key) =>{
		res.push([key, value]);
	})
	return res;
}

console.log(countAppearance([1,2,3,1,1,1,2]));