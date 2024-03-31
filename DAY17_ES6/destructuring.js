
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

let employeinformation = (employe) => {

    // let employeinfo = employe[1]
    // let secondemployename =employeinfo.name
    // let secondempployedeparatment =employeinfo.department

    // console.log( {secondemployename,secondempployedeparatment})

    const { name: secondemployename, department: secondempployedeparatment } = employe[1]
    console.log({ secondemployename, secondempployedeparatment })
}

employeinformation(employees)

// average salary : Define a function averageSalary that takes an array of employee objects, 'employees', as a parameter. Calculate the average salary of all employees using destructuring and a for-of-loop. Return the average salary.


const employee = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

let avaerageSalary = (employee) => {

    let totalsalary = 0

    for ({ salary } of employee) {
        totalsalary += salary
    }
    console.log(totalsalary / employee.length)
}
avaerageSalary(employee)

//Third Employee Info: Define a function thirdEmployeeInfo that takes an array of employee objects, 'employees', as a parameter. 
//Extract the name, age, and salary of the third employee and assign them to variables 'thirdEmployeeName', 'thirdEmployeeAge', 
//and 'thirdEmployeeSalary'. Calculate a bonus of 10% on the salary. Return a string in the format "Employee: , Age: , Salary: , Bonus: ".

const employe = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  let  thirdEmplloyeinfo=(employe)=>{
    
  
    const{name:thirdEmplloye,age:age,department:department,salary:salary}=employe[2]
    let bonus = salary*0.10
    console.log({thirdEmplloye,age,department,salary,bonus})
  }
  thirdEmplloyeinfo(employe)

