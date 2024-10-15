setTimeout(function(){
    console.log('2');
    Promise.resolve().then(function(){
        console.log(3);
        setTimeout(function(){
            console.log(4);
        },0)
    })
},0)

Promise.resolve().then(function(){
    console.log(5);
    setTimeout(function(){
        Promise.resolve().then(function(){
            console.log(9);
        })
        console.log(6);
       
    },0)
 
})