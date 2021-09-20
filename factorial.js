let factorial=(num)=>{
    let fact=1
    if(num==0 && num==1){
        return 1;
    }
    else if(num<0){
        return "can not find factorial"
    }
    else{
        for(let i=1;i<=num;i++)
        fact*=i
        return fact;
    }
}
console.log(factorial(5))
console.log(factorial(7))

function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(4));