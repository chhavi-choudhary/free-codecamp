function confirmEnding(str, target) {
    if(str.endsWith(target)){
        return true;
    }
    else{
        return false;
    }
  }
   console.log(confirmEnding("Bastian", "ian"))



let strEnding=(string, target)=>{
    if(string.slice(-target.length)===target){
        return true;
    }
    else{
        return false;
    }
}
console.log(strEnding("He has to give me a new name", "name"));




let newStr=(newStr, target)=>{
   return newStr.slice(newStr.length-target.length)===target;
}
console.log(newStr("Open sesame", "some"))
console.log(newStr("Open sesame", "esame"))

