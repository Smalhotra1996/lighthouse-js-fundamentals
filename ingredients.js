const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i =0;
while(i<ingredients.length){
    console.log(ingredients[i]);
    i++
}

for (const item of ingredients){
    console.log(item);
}

for (let a = (ingredients.length-1); a>=0; a--){
    console.log(ingredients[a]);
}
