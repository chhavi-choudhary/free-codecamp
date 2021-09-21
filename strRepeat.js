let repeatStr=(str, num)=>{
    let repeatString=""
    while(num>0){
        repeatString+=str;
        num--;
    }
    return repeatString;
}
console.log(repeatStr("hey",3))




function repeatStringNumTimes(string, times) {
    if(times < 0) 
      return "";
    if(times === 1) 
      return string;
    else 
      return string + repeatStringNumTimes(string, times - 1);
  }
  console.log(repeatStringNumTimes("abc", 6));




  function repeatStringNumTime(string1, time) {
    if (time > 0)
      return string1.repeat(time);
    else
      return "";
  }
  console.log(repeatStringNumTimes("abc", 3));