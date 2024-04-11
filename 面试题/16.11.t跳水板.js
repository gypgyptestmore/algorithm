var divingBoard = function(shorter, longer, k) {
    if(!k) return []
    let res = []
    if(shorter === longer) return [k*shorter]
    for(let i = 0;i <= k;i++){
        res.push(shorter * i + longer * ( k - i))
    }
    return res
};