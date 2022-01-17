const chunksArrayInToGroups=(array,size)=>{
let chunksArray=[];
for(let i=0;i<array.length;i+=size){
    chunksArray.push(array.slice(i,i+size));
}
return chunksArray;
}
console.log(chunksArrayInToGroups(["a", "b", "c", "d"], 2))
console.log(chunksArrayInToGroups([0, 1, 2, 3, 4, 5], 4))
console.log(chunksArrayInToGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))