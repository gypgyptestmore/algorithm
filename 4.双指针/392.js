//判断子序列
// 双指针，遍历字符串t，检查当前字符是否与s的字符相等
// 遍历完，i===t.length
var isSubsequence = function(s, t) {
    let i=0 
    let j=0
    while(i < s.length && j < t.length){
        if(s[i] === t[j]){
            i++
        }
        j++
    }
    return i === s.length;
};
let s = "abc"
let t = "ahbgdc"
isSubsequence(s,t)