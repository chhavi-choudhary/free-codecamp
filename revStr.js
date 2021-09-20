function reverseString(str) {
    str=str.split("").reverse().join("");
    return str;
  }
  console.log(reverseString("hello"));
  
let stringRevers=(string)=>{
    let revString="";
    for(let i=string.length-1;i>=0;i--){
        revString+=string[i]
    }
    return revString;
}
console.log(stringRevers("positive"))




  