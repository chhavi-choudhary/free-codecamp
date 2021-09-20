function findLongestWordLength(str) {
    let splitStr=str.split(" ");
    let maxLength=0;
    for(let i=0;i<splitStr.length;i++){
        if(splitStr[i].length>maxLength){
            maxLength=splitStr[i].length ;   }
        }
        return maxLength;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  
  
  function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }
  console.log(findLongestWordLength("hey reallyy you"))