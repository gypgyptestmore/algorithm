// 移除几个区间可以有无重叠区间
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length===0) return 0
    let count = 0
    let merge = []
    intervals.sort((a,b)=>a[1]-b[1])//拿老二时间排序
    let prevEnd = intervals[0][1]
    for(let i = 1;i<intervals.length;i++){
        if(intervals[i][0]<prevEnd){
            count++
        }else{
            prevEnd = intervals[i][1]
        }
    }
    return count
    // console.log(count)
};
// let intervals = [[1,2],[2,3],[3,4],[1,3]]
// let intervals = [ [1,2], [2,3] ]
// let  intervals = [ [1,2], [1,2], [1,2] ]
let intervals =  [[1,100],[11,22],[1,11],[2,12]]
console.log(eraseOverlapIntervals(intervals))