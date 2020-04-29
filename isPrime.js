const isPrime = function(n) {
	if(n <= 1){
		return false;
	}
	for(let i=2; i < n-1; i++){
		if(n % i === 0){
			return false;
		}
	}
	return true;
}


console.log(isPrime(1));
console.log(isPrime(15));
console.log(isPrime(4));
console.log(isPrime(97));
console.log(isPrime(11));
