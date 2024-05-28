//给出可能位数或符号不等的，要求比较大小
let str1 = "1.0";
let str2 = "1.0.9";

let max = 0;
let strr = str1.replace(/[^0-9]/g, "");
let len1 = strr.length;
let strrr = str2.replace(/[^0-9]/g, "");
let len2 = strrr.length;
max = len1 - len2 > 0 ? len1 : len2;

let strr1 = Number(strr.length === max ? strr : strr + "0");
let strrr1 = Number(strrr.length === max ? strrr : strrr + "0");

// let strr1 = Number(strr)
// let strrr1  = Number(strrr)
if (strr1 < strrr1) console.log("-1");
if (strr1 === strrr1) console.log("0");
if (strr1 > strrr1) console.log("1");

console.log(strr1, strrr1);
