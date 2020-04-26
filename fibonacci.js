//method 1
const fibonacci1 = function(n) {
	if(n === 1 || n === 2){
		return 1;
	}

	return fibonacci1(n-1)+fibonacci1(n-2);
}

//method 2
const fibonacci2 = function(n, memo){
	let res;
	if(memo[n] != undefined){
		return memo[n];
	}
	if(n === 1 || n === 2){
		res = 1;

	}else{
		
		res = fibonacci2(n-1, memo) + fibonacci2(n-2, memo);
	}

	memo[n] = res;
	return res;
}

const fibMemo = function(n){
	// let memo = [null] * (n + 1) ;
	let memo = new Array(n);
	fibonacci2(n, memo);
	memo.shift();
	return memo;
}


//method 3
const fibonacci3 = function(n) {
	if(n === 1 || n === 2){
		return 1;
	}
	let res = [];
	res[0] = 1;
	res[1] = 1;
	for(let i= 2; i<n; i++){
		res[i] = res[i-1] + res[i-2];
	}
	return res[n-1];
}

console.log("-------- method 1 --------")
console.log(fibonacci1(1));
console.log(fibonacci1(6));
// console.log(fibonacci1(50));

console.log("-------- method 2 --------")
console.log(fibMemo(1));
console.log(fibMemo(6));

console.log("-------- method 3 --------")
console.log(fibonacci3(1));
console.log(fibonacci3(6));

