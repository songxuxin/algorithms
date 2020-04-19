
function printPrimes(n){
	let res = [];
	for(let i=2; i<=n; i++){
		if(isPrime(i)){
			res.push(i);
		}
	}
	return res;
}



function isPrime(x){
	for(let i=2; i<=Math.sqrt(x); i++){
		if( x % i === 0){
			return false;
		}
	}
	return true;
}

console.log(printPrimes(100));

