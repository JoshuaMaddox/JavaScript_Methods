function mostFrequentLetters(str){
  var obj = {};
  for(var i = 0; i < str.length; i++){
    //Sets the key to str[i] and the value to 0+1 of no key by the 
    //name of str[i] exists or the current value + 1 if the key does exist
    obj[str[i]] = (obj[str[i]] || 0) + 1
  }
  var mostOfThisLetter = 0; 
  for(var j in obj){
    mostOfThisLetter = Math.max(mostOfThisLetter, obj[j]);
  }
  return mostOfThisLetter;
}

function wordsFinder(sentenceToStr){
  var strWord = '',
      letCount = 0,
      arrFinalWords = [],
      highestLetCount = 0,
      arrWords = sentenceToStr.split(' ')
  for(var i = 0; i < arrWords.length; i++){
    strWord = arrWords[i]
    var letCount = mostFrequentLetters(strWord);
    if(letCount > highestLetCount){
      highestLetCount = letCount;
      arrFinalWords = [strWord];
    } else if (letCount === highestLetCount){
      arrFinalWords.push(strWord);
    }
  }
  return arrFinalWords
}





