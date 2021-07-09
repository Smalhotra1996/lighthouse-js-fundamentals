const numberOfVowels = function(data) {
    count = data.match(/[aeiou]/gi).length;
    return count;
  };


  
  console.log(numberOfVowels("orAnge"));
  console.log(numberOfVowels("lighthoUse labs"));
  console.log(numberOfVowels("aeiou"));
  