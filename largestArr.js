function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] >arr[i][j+1]) {
         results.push(arr[i][j])
        }
      }
     return results;
    }
}
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))