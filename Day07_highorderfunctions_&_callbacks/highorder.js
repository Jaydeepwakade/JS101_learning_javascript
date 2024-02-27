// Use the map function to double each element in the array [1, 2, 3, 4].
// Expected Output: [2, 4, 6, 8]

//   let arr = [1,2,3,4]
//   let newarr= arr.map(function(elem){
//     return elem+elem
//   })
//   console.log(newarr)

// Use the filter function to get only the even numbers from the array [1, 2, 3, 4, 5].
// Expected Output: [2, 4]
 

// let arr = [1,2,3,4,5];
// let newarr =arr.filter(function(elem){
//     return elem%2===0
// })
// console.log(newarr)


// Use the reduce function to find the sum of elements in the array [1, 2, 3, 4, 5].
// Expected Output: 15

// let arr=[1,2,3,4,5]
// let sum=0;
//  let newarr=arr.reduce(function(elem,ind, arr){
//    sum=elem+ind
//    return sum
//  })
//  console.log(newarr)

// Question: Chaining Higher-Order Functions

// Chain the map and filter functions to square each element and then get only the squared even numbers from the array [1, 2, 3, 4, 5].
// Expected Output: [4, 16]

// let arr=[1,2,3,4,5]

// let evennums=arr.filter(function(elem){
//     return elem%2==0
// })
 
// let square= evennums.map(function(elem){
//     return elem*elem
// })
// console.log(square)

// let arr=[1,2,3,4,5]

// let square = arr
//    .map(function(elem){
//     return elem*elem
//    })
//    .filter(function(ele){
//      return ele%2==0
//    })


//    console.log(square)

// Question: Custom Higher-Order Function

// Create a higher-order function called multiplyBy that takes a multiplier and returns a function that multiplies its argument by the multiplier.
// Use it to create a function that doubles its argument.
// Expected Output: Calling doubleFunction(5) should return 10.




// function multiplyBy(multiplier){

//    return function(value){
//     return  value+multiplier

//   };
// }
//  let dobulefunction =multiplyBy(5)
//  console.log(dobulefunction(5));


// Question: Currying

// Implement a curried function called curriedSum that takes three arguments and returns the sum of them.
// Expected Output: curriedSum(1)(2)(3) should return 6.

//   function curriedsum(x){
//      return function(y){
//         return function(z){
    
//             return x+y+z
//         }
//      }
//   }
//   console.log(curriedsum(2)(5)(4))