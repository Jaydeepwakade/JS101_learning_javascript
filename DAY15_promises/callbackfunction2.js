 // this are the arrays to test the function
let arr = [10,22,43,9,1,20,4]
let arr2 =[1,2,3,4,5,6,7,8,9,0]
 
//this function takes the  two argument  arr and the call back function to  fikter the array
function filterArray(arr,cb){
    let newarr =[]
    for(let i=1;i<=arr.length-1;i++){
        if(cb(arr[i])){
              newarr.push(arr[i])
        }
    }
    return newarr
}
// this functions return the  values even and we pass this function in the filter array as the callback function and according to that the function excecute the code
function even(number){
    return number%2===0
} 
//this function reutrn the odd number and same here we pass this function as a call  back function in the filter aray

 function odd(number){
    return number%2!==0;
 }
 
 console.log(filterArray(arr2,even))
 console.log(filterArray(arr2,odd))

