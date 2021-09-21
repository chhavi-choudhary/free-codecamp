let largest=(array)=>{
  let largest=array[0];
for (let i=0;i<=array.length;i++){
  if (array[i]>largest){
    largest=array[i]
  }
}
return largest;
}
console.log(largest([11,23,45,24]))
console.log(largest([17,63,55,54]))

function biggestNumberInArray(arr) {
  const max = Math.max(...arr);
  return max;
}
console.log(biggestNumberInArray([2,5,7,4]))



let largestOfFour=(arr1)=>{
  let result=[];
  for(let i=0;i<arr1.length;i++){
    let largestNum=arr1[i][0]
    for(let j=0;j<arr1[i].length;j++){
      if(arr1[i][j]>largestNum){
        largestNum=arr1[i][j]
      }
    }
   result.push(largestNum);
  }
  return result;
}
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))


