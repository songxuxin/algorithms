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

console.log("abc, acc", distinct1charInOrder("abc", "acc")); //true
console.log("abc, bcd", distinct1charInOrder("abc", "bcd")); //false
console.log("acdd, acdde", distinct1charInOrder("acdd", "acdde")); //true
console.log("acdd, acdfe", distinct1charInOrder("acdd", "acdfe")); //false
console.log("acd, acddd", distinct1charInOrder("acd", "acddd")); //fasle
console.log("acd, cdaf", distinct1charInOrder("acd", "cdaf")); //false

//not in order, upper case and lower case are different
var distinct1charNotInOrder = function(s1, s2) {
    if(Math.abs(s1.length - s2.length) > 1) {
        return false;
    }
    var map = new Map();
    let count = 0;
    let minusCount = 0;
    for(let i = 0; i < s1.length; i++) {
        let curChar = s1.charAt(i);
        if(map.has(curChar)) {
          map.set(curChar, map.get(curChar) + 1);
        } else {
          map.set(curChar, 1);
        }

    }
    //console.log('map1', map);
    for(let i = 0; i < s2.length; i++) {
        let tempChar = s2.charAt(i);
        //console.log("tempChar=", tempChar, "value=", map.get(tempChar));
        if(map.has(tempChar)) {
          map.set(tempChar, map.get(tempChar) - 1);
        } else {
          map.set(tempChar, -1);
        }
    }
    //console.log('map2', map);
    for(const [key, value] of map.entries()) {
      //console.log('key=', key, 'value=', value);
        if(value === 1) {
            count++;
        } else if(value === -1) {
            minusCount++;
        } else if(value !== 0) {
            return false;
        }
    }
    //console.log("count=", count, "minusCount=", minusCount);
    if(s1.length === s2.length) {
        return count === 1 && minusCount === 1;
    } else {
        return (count === 1 && minusCount === 0)
        || (count === 0 && minusCount === 1);
    }

}

console.log("abc, acc", distinct1charNotInOrder("abc", "acc")); //true
console.log("abc, bcd", distinct1charNotInOrder("abc", "bcd")); //true
console.log("acdd, acdde", distinct1charNotInOrder("acdd", "acdde")); //true
console.log("acdd, acdfe", distinct1charNotInOrder("acdd", "acdfe")); //false
console.log("acd, acddd", distinct1charNotInOrder("acd", "acddd")); //false
console.log("acd, cdaf", distinct1charNotInOrder("acd", "cdaf")); //true
