/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = false;
    let num = 0;
    if(x < 0){
        flag = true;
        x = Math.abs(x);
    }
    while(x != 0){
        let reminder = x % 10;
        x = parseInt(x / 10);
        num = num * 10 + reminder;
    }

    if(num >= Math.pow(2,31)){
        return 0
    }else{
        if(flag){
            return 0-num;
        }else{
            return num;
        }
    }
};