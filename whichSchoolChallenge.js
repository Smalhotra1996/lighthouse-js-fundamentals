const whichSchool  = function (age) {
    if (age < 13) {
        return "Elementary School";
    }
    else if (13 <= age && age <= 18){
        return "Secondary School";
    }
    return "Lighthouse Labs";
}

console.log(whichSchool(5));
console.log(whichSchool(13));
console.log(whichSchool(18));
console.log(whichSchool(9));
console.log(whichSchool(25));