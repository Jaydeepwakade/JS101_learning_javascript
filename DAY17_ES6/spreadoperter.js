

let arr1=["apple","banana","orange"]
let arr2=["carrot","broccoli","spinach"]

let cominningArrays = (arr1,arr2)=>{
   let comine = [...arr1,...arr2]
   return comine
}
let newarr =cominningArrays(arr1,arr2)
 console.log(newarr)

// cloning objects using the spread opereator

let cloningObjects =(person)=>{

    let obj = {...person}
    console.log(obj)
}
let person ={name:"john",age:21, address: "abcdefg"}
cloningObjects(person)

// merging the objects using  the spread opertor

let student = {name:"alice",age:21}
let course ={coursename:"javscript",teacher:"Mr.smith"}

let mergingobjects= (obj1,obj2)=>{

    let newobj ={...obj1,...obj2}
    console.log(newobj)
}
mergingobjects(student,course)

// combining the nested array usinig spread operator

const array1 = [[1, 2],[3, 4],[5, 6],]
const array2 = [[7, 8],[9, 10],  [11, 12],];

let combiningtheNestedArrays=(arr1,arr2)=>{
     let newarr =[...arr1,...arr2]
     console.log(newarr)
}
combiningtheNestedArrays(array1,array2)