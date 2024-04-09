// 寻找两个正序数组的中位数
// 1. 时间复杂度O((m+n)log(m+n))，先合并数组并排序，再找中位数，奇数直接中间，偶数中间的平均数
// 2. 时间复杂度O(log(m+n)) 先对num1（较短数组）切分，算总数一半数量，提取剩余所需nums2，合并，
// 比较nums1左最大和nums2右最小，nums1右最小和nums2左最大

var findMedianSortedArrays = function(nums1, nums2) {
    // 比较最小数组
    if(nums1.length>nums2.length){
        [nums1,nums2] = [nums2,nums1]
    }
    let m = nums1.length
    let n = nums2.length
    let totalLength = m + n
    let  isEven = totalLength % 2 === 0//判断是否是偶数
    
    let start = 0
    let end = m
    while(start<=end){
        let pos1 = ~~((start+end)/2)//nums1左边长度
        let pos2 = ~~((totalLength+1)/2)-pos1//nums2左边长度

        let maxLeft1 = pos1 === 0 ? Number.MIN_SAFE_INTEGER:nums1[pos1-1] //左边非零有最大值
        let minRight1 = pos1 === m ? Number.MAX_SAFE_INTEGER:nums1[pos1]
        let maxLeft2 = pos2 === 0 ? Number.MIN_SAFE_INTEGER:nums2[pos2-1]
        let minRight2 = pos2 === n ? Number.MAX_SAFE_INTEGER:nums2[pos2]

        if(maxLeft1 <= minRight2 && minRight1 >= maxLeft2){
            if(isEven){
                return (Math.max(maxLeft1,maxLeft2)+Math.min(minRight1,minRight2))/2
            }else{
                return Math.max(maxLeft1,maxLeft2)
            }
        }else if(maxLeft1>minRight2){
            end = pos1-1
        }else{
            start = pos1+1
        }
    }
    return null
};
let nums1 = [1,3], nums2 = [2]
console.log(findMedianSortedArrays(nums1,nums2))
