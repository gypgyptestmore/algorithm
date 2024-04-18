// 双倍数组还原原数组
// 原数组original 和双倍数组changed 都在一个数组里边
// 数组长度是奇返回[],升序，记录元素出现频率
// 如果有该元素/2之后得到的元素，进入结果数组并将/2之后的元素频率-1
// 如果有该元素*2之后得到的元素。进入结果数组并将*2之后的元素频率-1
var findOriginalArray = function(changed) {
    let n = changed.length
    if(n%2) return []
    let res = []   //结果数组
    let freqMap = new Map() //使用哈希表映射存储元素以及出现的次数
    changed.sort((a,b)=>a-b)//升序排序
    for(let num of changed){    //记录元素出现频率
        freqMap.set(num,(freqMap.get(num)||0) + 1)
    }
    for(let num of changed){
        if(freqMap.get(num>0)){
            if(freqMap.has(num/2)&& freqMap.get(num/2)>0){
                res.push(num/2)
                freqMap.set(num/2,freqMap.get(num/2)-1)
            }else if(freqMap.has(num*2) && freqMap.get(num*2)>0){
                res.push(num)
                freqMap.set(num*2,freqMap.get(num*2)-1)
            }else{
                return []
            }
            freqMap.set(num,freqMap.get(num)-1)
        }
    }
    return res
};