let findElement=(arr, func)=> {
    //let num = 0;
 for (let i = 0; i < arr.length; i++) {
      //num = arr[i];
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
}
console.log(findElement([5,1, 2, 3, 4], num => num % 2 !== 0));





let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;