function calculateRectangleArea(length, width){
    if (length < 0 || width < 0){
        return undefined;
    }

    let rectangle =  length * width;
    return rectangle;
}

function calculateTriangleArea(base, height){
    if (base < 0 || height < 0){
        return undefined;
    }

    let triangle = base * height / 2;
    return triangle;
}

function calculateCircleArea(radius){
    if (radius <0){
        return undefined;
    }
    let circle = Math.PI * radius * radius;
    return circle;

}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); 
 // should print 3.75
console.log(calculateRectangleArea(10, -5)); 
