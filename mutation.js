const mutation=(array)=>{
let firstString=array[0].toLowerCase();
let secondString=array[1].toLowerCase();
for(let i=0;i<secondString.length;i++){
    if(firstString.indexOf(secondString[i])===-1)
    return false;
}
return true;

}
console.log(mutation(["hello", "hey"]));