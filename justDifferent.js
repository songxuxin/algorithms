// Write a function(pure javascript) with the following characteristics: 
// 1. Name: justDifferent 
// 2. 2 params: s1 and s2, both strings 
// 3. Should return true only if s1 and s2 differ by 1 distinct char 
// 4. Should be false if s1 and s2 are same or they differ by more than 1 distinct char

// answers are not right
// let justDifferent = function(s1, s2) {
// 	let count = 0;
// 	let i = 0;
// 	let j = 0;
// 	if(Math.abs(s1.length - s2.length) > 1){
// 		return false;
// 	}
// 	while(i < s1.length && j < s2.length){
// 		if(count >= 1){
// 			return false;
// 		}
// 		if(s1[i] != s2[j]){
// 			count++;
// 		}
// 		i++;
// 		j++;
// 	}
// 	console.log("------------")
// 	console.log("final count:", count);
// 	return true;
// }

console.log(justDifferent("abcde", "abcd"));
console.log(justDifferent("adsfasdf", "abcd"));
console.log(justDifferent("abcde", "abbde"));
console.log(justDifferent("abcd", "bcd"));
console.log(justDifferent("abcd", "bcde"));