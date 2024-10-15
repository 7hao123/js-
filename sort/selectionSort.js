Array.prototype.selectionSort = function(){
    for(let i=0;i<this.length;i++){
        let indexMin = i;
        for(let j=i; j < this.length ;j++){
            if(this[j] < this[indexMin]){
                indexMin = j;
            }
        }
        const temp = this[0];
        this[0] = this[indexMin];
        this[indexMin] = temp
    }

}

// 默认第0个最下，一直选择后面最小的放到第一个