
 
 
 
 //this function take two argument num1 and num2 a
 function calculate(num1 ,num2){
   // this function take the three arguments num1 num2  and the callback  which operation we want to perform
    function operation(num1, num2,cb){
        return cb(num1,num2)
    }
    // this function  takes the two arguments and return the addition of the both numbers
    function add(num1,num2){
        return num1+num2

    }

    //this function takes the two arguments and the return the multiplication of the both numbers
      function multiply (num1,num2){
      return num1*num2
      }
    
    // here we create one variable in that call the funtion with three arguments  and console thier values
    let addition = operation(num1,num2,add)
    console.log(addition)

    let mul = operation(num1,num2,multiply)
    console.log(mul)
    
 }
 // we test the function with different numbers
  calculate(5,2)
  calculate(10,5)
