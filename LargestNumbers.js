const sumLargestNumbers = function(data) {
    var total = 0;
    var max1 = data[0];
    var max2 = data[1];

    if (data.length > 2){
        for(let i = 2; i <data.length; i++) {
            if (data[i]>max1 && data[i]>max2){
                if(max1>max2){
                    max2 = data[i];
                }
                else
                {
                    max1 = data[i];
                }
            }
            else if(data[i] > max1){
                max1 = data[i];
            }
            else if(data[i] > max2){
                max2 = data[i];
            }
        }
    }

    total = max1 + max2;
    return total;
}   

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));