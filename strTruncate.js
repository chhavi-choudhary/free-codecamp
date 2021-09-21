let truncateString=(string, num)=>{
    if(string.length>num){
        return string.slice(0, num+1)+("...")
    }
    else{
        return string;
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


let truncatedStr=(str, number)=>{
    return str.length > number ? str.slice(0, number) + "..." : str;

}
console.log(truncatedStr("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));