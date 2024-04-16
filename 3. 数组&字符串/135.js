// 分发糖果

// 最少每个孩子都有一个糖果，相邻的大的糖多一个
var candy = function(ratings) {
    let n = ratings.length
    let res = new Array(n).fill(1)//每个孩子最少1个糖
    for(let i = 1;i < n;i++){
        // 从左往右遍历，右边评分高的孩子获得更多糖果
        if(ratings[i]>ratings[i-1]){
            res[i] = res[i-1] + 1
        }
    }
    // 从右往左遍历，保证左边评分高的获得糖果更多
    for(let i = n - 2; i >= 0;i--){
        if(ratings[i] > ratings[i+1]){
            res[i]  = Math.max(res[i],res[i+1]+1)
        }
    }
    return res.reduce((acc,curr)=>acc+curr,0)
};