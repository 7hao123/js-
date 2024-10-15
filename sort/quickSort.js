Array.prototype.quickSort = function(){
    const rec = (arr)=>{
        const left = [];
        const right = [];
        const mid = arr[0];
        for(let i=1;i<arr.length;i++){
            if(arr[i]<mid){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return [...rec(left),mid,...rec(right)]
    }
    const res = rec(this)
    res.forEach((n,index)=>{
        this[index] = n
    })
}

// 分区操作o（n）  递归logN    nlogn