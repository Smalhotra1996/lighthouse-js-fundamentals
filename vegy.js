const judgeVegetable = function (listOfVegetables, metric){
  let Nop = "";
  let max = -1;

  for(let veg = 0; veg < listOfVegetables.length; veg++){
    if(listOfVegetables[veg][metric] > max){
      Nop = listOfVegetables[veg]['submitter'];
      max = listOfVegetables[veg][metric];
    }
  }
  
  return Nop;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

let res = judgeVegetable(vegetables, metric);

console.log(res);