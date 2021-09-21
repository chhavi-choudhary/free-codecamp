let stringCase=(string)=>{
let arr= string.toLowerCase().split(" ")
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i][0].charAt(0).toUpperCase()+arr[i].substr(1);
}
return arr.join(" ");

}
console.log(stringCase("hey a biggy bangy little tea pot"))
//console.log(stringCase("sHoRt AnD sToUt"))