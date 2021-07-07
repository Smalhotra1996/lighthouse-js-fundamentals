const lastIndexOf = function(list,val){
    
    let lastpos = -1;

    for(let i = 0; i < list.length; i++){
        if(list[i] === val){
            lastpos = i;
        }
    }

    return lastpos;   
}

console.log(lastIndexOf( [4,100,9,4] , 1 ));