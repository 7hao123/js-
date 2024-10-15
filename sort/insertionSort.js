Array.prototype.insertionSort = function (){
    for(let i=1;i<this.length;i++){
        const temp = this[i];
        let j = i;
        while(j >0){
        if(this[j-1] >temp){
            this[j] = this[j-1]
        }else{
            break;
        }
        j -=1;
    }
    this[j] = temp;
    }
    
}

// 插入排序  假设前面index在i之前的是已经排序好的