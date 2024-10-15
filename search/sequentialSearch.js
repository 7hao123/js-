Array.prototype.sequentialSearch = function(item){
    for(let i=0;i< this.length;i++){
        if(this[i] === item){
            return i
        }else return -1
    }
}


// indexOf

