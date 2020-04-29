const largetPrimeFactor = function(n) {
	if(n <= 1){
		return 0;
	}else{
		let div = 2;
		while(div < n){
			if(n % div != 0){
				div++;
			}else{
				n = n / div;
				div = 2;
			}
		}
		return n;
	}
}


console.log(largetPrimeFactor(47));
console.log(largetPrimeFactor(48));
console.log(largetPrimeFactor(100));
console.log(largetPrimeFactor(49));


