//
var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    if(intervals.length===0) return []
    intervals.sort((a,b)=>a[0]-b[0])
    let merged = []
    for(let interval of intervals){
        // 直接添加到merge
        if(merged.length===0||merged[merged.length-1][1]<interval[0]){
            merged.push(interval)
        }else{  //后边比前边大，合并大的
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1],interval[1])
        }
    }
    return  merged
};
let intervals = [[1,3],[6,9]], newInterval = [2,5]
console.log(insert(intervals,newInterval))