// Create a function that takes a string with at least one sentence
//  in it and returns a string with the part(s) after the comma at the beginning of the sentence(s). 
//  Examples reverseLegoYoda("Hit you with my stick, I shall.") ➞ "I shall hit you with my stick." 
//  reverseLegoYoda("Rejected me, my crush has. Ketamine, I need.") ➞ "My crush has rejected me. I need ketamine." 
//  reverseLegoYoda("An alien, I am. Holding me captive in Area 51, the government is.") 
//  ➞ "I am an alien. The government is holding me captive in Area 51."



function splitAndReverse(str){
	//split str to array of strs
	let strs = str.split('.');
	trimAnArray(strs);

	//chage every first char of string in array to lower case.
	changeFirstCharToLower(strs);

	for(let i=0; i<strs.length; i++){
		strs[i] = strs[i].split(',');
		strs[i].reverse();
		trimAnArray(strs[i]);
		strs[i] = strs[i].join(' ');
	}
	changeFirstCharToUpper(strs);
	strs = strs.join('. ');
	return strs;
}

console.log(splitAndReverse("Rejected me, my crush has. Ketamine, I need."));
console.log(splitAndReverse("An alien, I am. Holding me captive in Area 51, the government is."));

function trimAnArray(arr){
	for(let i=0; i<arr.length; i++){
		if(arr[i]){
			arr[i] = arr[i].trim();
		}
	}
}

function changeFirstCharToLower(arr){
	for(let i=0; i<arr.length; i++){
		if(arr[i][0]){
			let firstChar = arr[i][0].toLowerCase();
			arr[i] = arr[i].replace(arr[i][0], firstChar);
		}
	}
}

function changeFirstCharToUpper(arr){
	for(let i=0; i<arr.length; i++){
		if(arr[i]){
			let firstChar = arr[i][0].toUpperCase();
			arr[i] = arr[i].replace(arr[i][0], firstChar);
		}
	}
}


