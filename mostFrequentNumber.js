
let mostFrequentNumber = function(arr) {
	let map = {};
	let max = 0;
	let maxNumber = 0;
	for(let i=0; i<arr.length; i++){
		if(map[arr[i]]){
			map[arr[i]]++;
			if(max < map[arr[i]]){
				max = map[arr[i]];
				maxNumber = arr[i];
			}
		}else{
			map[arr[i]] = 1;
			if(map[arr[i]] > max){
				max = map[arr[i]];
				maxNumber = arr[i];
			}
		}
	}
	return maxNumber;
}


console.log(mostFrequentNumber([1,2,4,3,5,2,2,1,0,9]));
console.log(mostFrequentNumber([1]));
console.log(mostFrequentNumber([1,2,1,2]));

