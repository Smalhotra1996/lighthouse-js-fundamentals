function isEven(num){
    return num % 2 === 0;
}

const variableA = isEven(20);
console.log(variableA);

const isEvenVersionTwo = function(num){
    return num % 2 === 0;
}

console.log(isEvenVersionTwo(20));

//f(x) = 5*x+10;

const f = function(x){
    return 5*x+10;
}

console.log(f(5));

const y = f(6);

console.log(y);