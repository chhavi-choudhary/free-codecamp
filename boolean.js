let checkBoolean=(value)=>{
    if(typeof(value)==="boolean"){
        return true;
    }
    else {
        return false;
    }
}
console.log(checkBoolean(true));
console.log(checkBoolean("abh"));

function booWho(bool) {
    return typeof bool === "boolean";
  }
 console.log(booWho(null));