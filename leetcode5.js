/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s === null  || s.length === 0){
        return '';
    }
    
    let startIndex = 0;
    let endIndex = 0;
    
    for(let i=0; i<s.length; i++){
        let arr = getMaxLength(s, i, i);
        if(endIndex - startIndex < arr[1] - arr[0]){
            startIndex = arr[0];
            endIndex = arr[1];
        }
        if(i+1 === s.length) break;
        arr = getMaxLength(s, i, i+1);
        if(endIndex - startIndex < arr[1] - arr[0]){
            startIndex = arr[0];
            endIndex = arr[1];
        }
    }
    return s.substring(startIndex, endIndex);
};

var getMaxLength = function(s, l, r) {
    while(l >= 0 && r <= s.length && s[l] === s[r] ){
        l--;
        r++;
    }
    return [l+1, r];
}