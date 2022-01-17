
const reveseString=(string)=>{
    let newString=string.split('').reverse().join('');
    return newString;
}
console.log(reveseString("hello"))


const factorial=(num)=> {
    return (num==0||num==1?1:num*factorial(num-1));
}
console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(0))




const findLongestWordLength=(string)=>{
    let splitStr=string.split(' ');
    let longestWoedLength=0;
    for(let i=0;i<splitStr.length;i++){
        if(splitStr[i].length>longestWoedLength){
            longestWord=splitStr[i].length;
        }
    }
    return longestWord;
    }
    
console.log(findLongestWordLength("get free number"))

function findLongestWordLength(str) {
    let longestWord=str.split(' ').sort(function(a,b){
   return b.length-a.length;
    })
    return longestWord[0].length;
  }
  console.log(findLongestWordLength("The quick browniee fox jumped over the lazy dog an"));


  const findShortestWordLength=(string)=>{
      let shortestWord=string.split(' ').sort((a,b)=>a.length-b.length)
      return shortestWord[0].length;
  }
  console.log(findShortestWordLength("The quick browniee fox jumped over the lazy dog an"));

const largestOfArray=(array)=>{
    let sortedArray=array.sort((a,b)=>b-a) ;
    let largest=sortedArray[0]
    return largest;
}
console.log(largestOfArray([4, 5, 1, 3]));



const confirmiEnding=(string, target)=>{
    return (string.substring(string.length-target.length)===target)
}
console.log(confirmiEnding('hello','lo'))
console.log(confirmiEnding("Open sesame", "sme"))
console.log(confirmiEnding("Abstraction", "action"))


const repeatStringtimes=(string, num)=>{
    let repeatString="";
    for(let i=0;i<num;i++){
        repeatString+=string;
    }
    return repeatString;
}
console.log(repeatStringtimes("hey",7));

function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }

  function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }

const truncateStr=(string, num)=>{
    return string.length>num?string.slice(0,num)+"...":string;
}
console.log(truncateStr("Peter Piper picked a peck of pickled peppers", 11))


function findElement(arr, func) {
    for (let i=0;i<arr.length;i++){
      if (func(arr[i])){
        return arr[i];
      }
      else undefined;
    }
  }
  
 console.log(findElement([1, 2, 3, 4], num => num % 2 !== 0));
 console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
 console.log(findElement([9, 2, 3, 4], num => num % 3 == 0));


const capitalizeFirstLetter=(string)=>{
    let newStr=string.toLowerCase().split(' ');
    for(let i=0;i<newStr.length;i++){
        newStr[i]=newStr[i].charAt(0).toUpperCase()+newStr[i].substring(1);
    }
    
    return newStr.join(' ');
}
console.log(capitalizeFirstLetter("hTTy hello how hee"))

function frankenSplice(arr1, arr2, n) {
    let arrayCopy=arr2.slice();
    arrayCopy.splice(n, 0, ...arr1);
   return arrayCopy;
}
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for( var i = 0; i < arr.length; i++){ 
     if ( arr[i] === 5) { 
            arr.splice(i, 1); 
        }
    }
    
const removeFalsy=(array)=>{
  let newarray=[];
  for(let i=0;i<array.length;i++){
    if(array[i])
    newarray.push(array[i])
  }
  return newarray;
}
console.log(removeFalsy([7, "ate", "", false, 9]))
console.log(removeFalsy([false, null, 0, NaN, undefined, ""]))
console.log(removeFalsy([null, NaN, 1, 2, undefined]))


const getIndexToInsert=(arr, num)=>{
arr.sort((a,b)=>a-b);
for(let i=0;i<arr.length;i++){
  if(arr[i]>=num)
  return i;
}
}

console.log(getIndexToInsert([4,3,5,2,1], 3.5))
console.log(getIndexToInsert([4,3,5,2,1],4))
console.log(getIndexToInsert([40, 60], 50))
console.log(getIndexToInsert([3, 10, 5], 3))


const findIndex=(array, number)=>{
  return array
    .concat(number).sort((a,b)=>a-b).indexOf(number);
}
console.log(findIndex([4,3,5,2,1], 3.5))
console.log(findIndex([1,3,4], 2))