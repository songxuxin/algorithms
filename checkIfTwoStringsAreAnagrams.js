let checkIfTwoStringAreAngrams = function(A, B) {

	if(A.length != B.length){
		return false;
	}

	let map = {};
	for(let i=0; i<A.length; i++){
		if(map[A[i]]){
			map[A[i]]++;
		}else{
			map[A[i]] = 1;
		}
	}

	for(let i=0; i<B.length; i++){
		if(map[B[i]]){
			map[B[i]]--;
		}else{
			return false;
		}
	}

	let counts = Object.keys(map);
	let sum = 0;
	for(let i=0; i<counts; i++){
		sum = sum + counts[i];
	}

	if(sum>0){
		return false;
	}else{
		return true;
	}
	
}


console.log(checkIfTwoStringAreAngrams("abc", "bca"));
console.log(checkIfTwoStringAreAngrams("a", ""));
console.log(checkIfTwoStringAreAngrams("ab", "bc"));