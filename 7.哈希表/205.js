// 判断同构字符串   ABAC => ABAC
// 映射关系  s2t，t2s
var isIsomorphic = function (s, t) {
    let s2t = {}
    let t2s = {}
    for(let i= 0;i < s.length;i++){
        // 判断非同构
        if( (s2t[s[i]] && s2t[s[i]]!==t[i]) || t2s[t[i]] &&t2s[t[i]]!==s[i]){
            return false
        }
        // 建立 s[i] 到 t[i] 和 t[i] 到 s[i] 的映射关系
        s2t[s[i]] = t[i]
        t2s[t[i]] = s[i]
    }
    return true
};