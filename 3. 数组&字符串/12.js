// 整数转罗马数字
// 方法;穷举法
var intToRoman = function(num) {
    let romanMap = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    let result = ''
    for(let key in romanMap){
        while(num >= romanMap[key]){
            result += key
            num -= romanMap[key]
        }
    }
    return   result 
};