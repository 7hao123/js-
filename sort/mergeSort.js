// 归并排序
// 合并两个有序数组  

Array.prototype.mergeSort = function (){
    const rec = (arr) =>{
        if(arr.length ===1) return arr;
        const mid = Math.floor(arr.length/2);
        const left = arr.slice(0,mid);
        const right = arr.slice(mid);
        const orderLeft = rec(left);
        const orderRight = rec(right);

        const res= [];
        while(orderLeft.length || orderRight.length){
            if(orderLeft.length && orderRight.length){
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            }else if(orderLeft.length){
                res.push(orderLeft.shift())
            }else if(orderRight.length){
                res.push(orderRight.shift())
            }
        }
        return res
    }
    const res = rec(this)
    console.log(res);
}

const  arr = [5,4,3,2,1];
arr.mergeSort()