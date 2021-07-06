const range = function(start,end,step){
    var num = [];
    
    if (start === undefined || end === undefined 
        || step === undefined){
            return num;
    }

    if (start > end){
        return num;
    }

    if (step <= 0){
        return num;
    }

    for (let counter = start; counter <= end; counter+=step ){
        num.push(counter);
    }

    return num;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));