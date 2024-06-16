// function flat(arr){
//     const hasArr = arr.some(item=>item instanceof Array)
//     if(!hasArr) return arr
//     const res = Array.prototype.concat.apply([],arr)
//     return flat(res)
// }

function flatten(arr){
    const hasArr = arr.some(item=>Array.isArray(item)||typeof item === 'object' && item!==null)
    if(!hasArr) return arr
    const res = arr.reduce((result,item)=>{
        if(Array.isArray(item)){
            return result.concat(flatten(item))
        }else if(typeof item==='object'&&item!==null){
            return result.concat(flatten(Object.values(item)))
        }else{
            return result.concat(item)
        }
    },[])
    return flatten(res)
}
const array = [1, { a: 2 }, [3, 4, [5, 6], 7], 8, 9]
let a = flatten(array)
console.log(a)