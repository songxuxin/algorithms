var anagramMappings = function(A, B) {
    let map = {};
    let p = [];
    for(let i=0; i<B.length;i++){
        map[B[i]] = i;
    }
    for(let i=0; i<A.length; i++){
        p.push(map[A[i]]);
    }
    return p
};

console.log(anagramMappings([12, 28, 46, 32, 50],[50, 12, 32, 46, 28]));