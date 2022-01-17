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
  
const removeFal=(arr)=>{
    return arr.filter(Boolean)
}  
console.log(removeFal([null, NaN, 1, 2, undefined]))