var printPrimes = function(n) {
    if(n < 2) {
        return [];
    }
    let primes = [];
    let notPrimes = {};
    for(let i = 2; i <= n; i++) {
        
        for (let j = 2; i * j <= n; j++) {
            notPrimes[i * j] = true
        }
    }
    for(let i = 2; i <= n; i++) {
        if(notPrimes[i] !== true) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(printPrimes(100));
/*[
    2,  3,  5,  7, 11, 13, 17, 19,
    23, 29, 31, 37, 41, 43, 47, 53,
    59, 61, 67, 71, 73, 79, 83, 89,
    97
  ]
  */