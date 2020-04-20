//in order
var distinct1charInOrder = function (s1, s2) {
    if(Math.abs(s1.length - s2.length) > 1) {
        return false;
      }
      let differ = false;
      let len = Math.min(s1.length, s2.length);
      for(let i = 0; i < len; i++) {
        if(s1.charAt(i) !== s2.charAt(i)) {
          if(differ) {
            return false;
          } else {
            differ = true;
          }
        }
      }
      
    return s1.length === s2.length ? differ : !differ;
}

//not in order
var distinct1charNotInOrder = function(s1, s2) {
    if(Math.abs(s1.length - s2.length) > 1) {
        return false;
    }
    let arr = [];
    let count = 0;
    let minusCount = 0;
    for(let i = 0; i < s1.length; i++) {
        arr[i]++;
    }
    for(let i = 0; i < s2.length; i++) {
        arr[i]--;
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            count++;
        } else if(arr[i] === -1) {
            minusCount++;
        } else if(arr[i] !== 0) {
            return false;
        }
    }
    return count === 1 && minusCount === 1;
}
