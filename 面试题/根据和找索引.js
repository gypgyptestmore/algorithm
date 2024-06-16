function twoSum(nums,target){
    let map = new Map()
    for(let i = 0;i < nums.length;i++){
        let component = target-nums[i]
        if(map.has(component)){
            return [component,nums[i]]
        }
        map.set(nums[i],i)
    }
    return []
}
let  nums=[8, 2, 6, 5, 4, 1, 3]
let  target=7
let a = twoSum(nums,target)
console.log(a)