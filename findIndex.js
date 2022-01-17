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