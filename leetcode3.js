/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let mySet = new Set();
    let maxLength = 0;
    while(right < s.length){
        if(!mySet.has(s[right])){
            mySet.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, mySet.size);
        }else{
            mySet.delete(s[left]);
            left++;
        }
    }
    return maxLength;
};