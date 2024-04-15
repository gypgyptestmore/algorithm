// H指数
// citations = [3,0,6,1,5]输出：3 
// 由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
// 思路：没有啊，看不懂撒

// 思路：降序排序后，求min(i+1,nums[i]),再比较H留最大

var hIndex = function(citations) {
    let H = 0
    // 降序排序
    citations.sort(function(next,prev){
        return prev - next
    })

    for(let i = 0;i < citations.length;i++){
        H = Math.max(H,Math.min(i+1,citations[i]))
    }
    return H
};