// 最后一个单词长度
// 从字符串最右侧计数，去除字符串开始和结尾的空格，
// 遇到空格返回长度
var lengthOfLastWord = function(s) {
    s = s.trim()//去除字符串开始和结尾的空格
    let n = s.length
    let sum = 0
    if(!n) return 0
    for(let i = n-1;i >= 0;i--){
        if(s[i] !== ' '){
            sum++
        }else{
            break
        }
    }
    return sum
};