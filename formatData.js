//format from MM/DD/YYYY to YYYYMMDD

var formatData = function(userDate) {
    //suppose userDate is a String??
    let str = userDate.split("/");
    //console.log("str=", str);
    return str[2] + str[0] + str[1];
}

console.log(formatData("12/24/2014"));