Array.prototype.binarySearch = function(item){
    let left =0;
    let right = this.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right) /2)
        const element = this[mid]
        if(element < item){
            low = mid + 1
        }else if(element > item){
            high = mid - 1
        }else {
            return mid
        }
    }
    return -1
}

// logn