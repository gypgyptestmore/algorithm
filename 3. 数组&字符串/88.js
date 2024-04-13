// 合并有序数组,分别已知数组和数组长度
// 思路 💩：首先扩充Nums1的数组长度，将num2拼接到Nums1，再对nums1排序
// 正确思路：获取两个数组的末指针以及应该长度的指针，
// 比较两个末指针对应的值大的放在应该长度的位置，合并数组以及已放置数组同时进行自减


var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let q1 = n - 1
    let p = m+n -1
    while(p1>=0 && q1 >=0){
        if(nums1[p1] > nums2[q1]){
            nums1[p] = nums1[p1]
            p1--
        }else{
            nums1[p] = nums2[q1]
            q1--
        }
        p--
    }
    nums1.splice(0,q1+1,...nums2.slice(0,q1+1))//nums2剩余元素放到Nums1前面
};
