const numberOfVowels = function(data) {
    count = data.match(/[aeiou]/gi).length;
    return count;
  };


  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));
  