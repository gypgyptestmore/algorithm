// 翻转字符串的单词顺序
// 先去除首尾空格，按空格保存字符串到变量存到数组，最后从后往前输出

var reverseWords = function(s) {
    s = s.trim()
    let arr = []
    let word = ''
    let n = s.length
    for(let i =0;i < n;i++){
        if(s[i]!==' '){
            word += s[i]
        }else if(word){
            arr.push(word)
            word = ''
        }
    }
    if(word){
        arr.push(word)
    }
    return arr.reverse().join(' ')
};