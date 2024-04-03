const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

  let countCalculation =(school)=>{

    let {
        departments:{
             math:{teachers:mathteachercount,students: mathstudentcount},
             history:{teachers:historyTeachercount,students:historystudentount}
            }
        }=school

    console.log(mathteachercount,mathstudentcount,historyTeachercount,historystudentount)

    let obj ={
        mathteachercount,
        historyTeachercount,
        mathstudentcount,
        historystudentount

    }
    console.log(obj)

  }

  countCalculation(school)


let findTopstudent=(school,course)=>{

  let highest;

   for(const student of school.students){
    if(student.scores.hasOwnProperty(course)){
       const{[course]:score}= student.scores
     if(!highest || score > highest.scores[course]){
      highest =student

     }
    }
   }
   console.log(highest)

}
findTopstudent(school,"history")
let obj = {art:{ teachers: 2, students: 50 }}

let addNewdept = (school,newdep) => {

  const { departments } = school

  const department = {

    ...departments,
    ...newdep
  }
   const updateschool ={
    ...school,
    departments:department
   }

  console.log(department)
}
addNewdept(school,obj)

let highestdepartmentcount = (school) => {
  const departments =school.departments
  let maxStudentCount = 0;
  let highestDept = "";

  for (const departmentName in departments) {
    if (departments.hasOwnProperty(departmentName)) {
           const department =departments[departmentName]
           if(department.students>maxStudentCount){
            maxStudentCount = department.students;
            highestDept = departmentName;
           }
    }
  }
  console.log(highestDept);
 }



highestdepartmentcount(school);

let genreateGreeting =(name ,language ="English")=>{
   const greeting= {

   " English":`Hello, ${name}`,
   "Spanish":`Hola,${name}`,
    'French': `Bonjour, ${name}!`
   }
 console.log( greeting[language] ||`Hello, ${name}`)

}
genreateGreeting("jaydeep","French")