// const employees = [
//     { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//     { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//     { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
//   ];

//   let  highestPaid = (employes)=>{
//      let hieghest = 0
//      let highestPaid= null
    
//     for( const employe of employes){
//      const{salary}=employe
//        if(salary>hieghest){
//         hieghest=salary
//         highestPaid=employe
//        }
//     }
//     console.log(highestPaid)

//   }
// highestPaid(employees)
//Destructuring to Swap: Define a function destructuringToSwap that takes an array of employee objects, 'employees', as a parameter. Use destructuring to swap the values of the first and last employees in the array. Return the modified 'employees' array.
//Example Invocation:

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },

];


let destructuringToswap= (arr)=>{
   
  if(arr.length >2){
     [arr[0], arr[arr.length-1]] =[arr[arr.length-1],arr[0]] 
  }
console.log(arr)
}
destructuringToswap(employees)
 // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: '