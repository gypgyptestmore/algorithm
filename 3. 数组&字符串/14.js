// 查找最长公共前缀
// 思路💩:先获取数组字符串中最短字符串长度，设为公共前缀samStr，比较字符，若有不一样的留下一样的部分到samStr，

// 思路：遍历数组的第一个字符串，挨个与后边字符串比较，字符不相等或者索引超过别的字符长度，确定公共最长前缀

var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''
    let n = strs.length
    let str = strs[0]   //初始化公共前缀
    for(let i = 1;i < n;i++){
        let j = 0
        while(j<str.length && j<strs[i].length && str[j] === strs[i][j]){
            j++
        }
        str = str.substring(0,j)//截取元素
        if(str === '') break    //公共前缀为空，跳出循环
    }
    return str
};