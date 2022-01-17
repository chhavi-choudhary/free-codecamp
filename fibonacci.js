// function fibonacci(num){
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
//   }
//   console.log(fibonacci(7))
// function F(n) {  if(n == 0) {    return 0;
// }  if(n == 1) {    return 1;
// }  else {    return F(n-1) + F(n-2);
// }}
// console.log(F(6))



function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
   
    return num2;
}
//console.log(fibonacci(6))