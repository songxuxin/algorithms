const finCommonElements = (arr1, arr2) => {
	if(arr1.length === 0 || arr2.length ===0){
		return [];
	}
	let map = {};
	for(let i=0; i<arr1.length; i++){
		if(!map[arr1[i]]){
			map[arr1[i]] = ;
		}
	}
	let res = [];
	for(let i=0; i<arr2.length; i++){
		if(map[arr2[i]]){
			res.push(arr2[i])
		}
	}
	return res;
}


console.log(finCommonElements(['a','b','g'],['a', 'a','b','v','c']));
console.log(finCommonElements(['a', 'a','b','v','c'], []));

