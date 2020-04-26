
let printFactorial = function(n) {

	if(n === 0){
		return 0;
	}

	if(n === 1){
		return 1;
	}

	return n * printFactorial(n-1);

}


console.log(printFactorial(5));
console.log(printFactorial(100));



let dpFactorial = function(n, arr){
	let res = null;
	if(arr[n] != undefined){
		return arr[n];
	}

	if(n === 1 ){
		res = 1;
	}else if(n === 0){
		res = 0;
	}else{
		res = n * dpFactorial(n-1, arr);
	}

	arr[n] = res;

	return res;
}

let memo = function(n){
	let arr = new Array(n);
	return dpFactorial(n, arr);
}


console.log(memo(5));
console.log(memo(100));
