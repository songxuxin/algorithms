//Write a simple code for finding the most repeated character in given string

let mostRepeatedChar = (str) => {
	if(str === null){
		return "str cannot be null";	
	}
	let myMap = new Map();
	for(let i=0; i<str.length; i++){
		if(!myMap.has(str[i])){
			myMap.set(str[i], 1);
		}else{
			myMap.set(str[i], myMap.get(str[i])+1);
		}
	}
	let max = 0;
	let mostRepeatedChar = '';
	myMap.forEach((value, key) => {
		if(value > max){
			max = value;
			mostRepeatedChar = key;
		}
	})
	return mostRepeatedChar;
}


console.log(mostRepeatedChar("aavbbbccvvvvddvv"));
console.log(mostRepeatedChar("avbvccv"));
console.log(mostRepeatedChar("b"));
console.log(mostRepeatedChar(null));


