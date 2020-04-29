const checkCommonSubStrings = function(str1, str2) {
	for(let i = 0; i < str1.length; i++){
		for(let j = 0; j < str2.length; j++){
			if(str1[i] === str2[j]){
				return true;
			}
		}
	}
	return false;
}


console.log(checkCommonSubStrings('hi', 'world'));
console.log(checkCommonSubStrings('hi', 'hello'));
console.log(checkCommonSubStrings('hello', 'world'));
