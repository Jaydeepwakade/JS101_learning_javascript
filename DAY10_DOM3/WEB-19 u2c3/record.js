// fill in javascript code here
document.getElementById("btn").addEventListener("click",function(){
    getData()
})

let arr = JSON.parse(localStorage.getItem("Data")) || []
  formdata(arr)
function getData(){
   event.preventDefault()
    let Name = document.getElementById("name").value
     let Id = document.getElementById("employeeID").value
     let  Department= document.getElementById("department").value
     let Exp =document.getElementById("exp").value
     let email = document.getElementById("email").value
     let mobile =document.getElementById("mbl").value
     let btn= document.createElement("button").innerText="delete"
   

      let role =""
     if(Exp>5){
          role="Senior"
     }
     else if(Exp>=2 && Exp<=5){
        role="Junior"
     }
     else if( Exp>=0 && Exp<2 ){
         role="Fresher"
     }
     
     document.getElementById("NameP").innerText=""
     document.getElementById("Emp-id").innerText=""
     document.getElementById("Dep").innerText=""
     document.getElementById("Exper").innerText=""
     document.getElementById("EmailP").innerText=""
     document.getElementById("number").innerText=""
     let  namerror= false
     let iderror =false
     let deperror=false
     let exprerror=false
     let eamilerror=false
     let numeroor= false

     if(Name===""){
        namerror=true
     }
    if(Id===""){
        iderror=true
    }
    if(Department===""){
        deperror=true
    }
    if(Exp===""){
        exprerror=true
    }
    if(email===""){
        eamilerror=true
    }
    if(mobile===""){
         numeroor=true
    }
    if(namerror){
        document.getElementById("NameP").innerText="Name is requierd"
    }
    if(iderror){
        document.getElementById("Emp-id").innerText="id is required"
    }
    if(deperror){
        document.getElementById("Dep").innerText="Dep is required"
    }
    if(exprerror){
        document.getElementById("Exper").innerText="Experience is required"
    }
    if(eamilerror){
        document.getElementById("EmailP").innerText="Email is required"
    }
    if(numeroor){
        document.getElementById("number").innerText="Number is required"
    }
   
      if(namerror || iderror || deperror ||exprerror||eamilerror||numeroor){
        return false
      }
 
   
     let obj={
        Name :Name,
        Id :Id,
        Department:Department,
        Exp:Exp,
        email:email,
        mobile:mobile,
        role:role,
        btn:btn
        
     }
     
     arr.push(obj)
     console.log(arr)
    formdata(arr)
    localStorage.setItem("Data",JSON.stringify(arr))
}


function formdata(arr){
    document.querySelector("tbody").innerHTML=""
    arr.forEach(function(ele,ind){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText= ele.Name
        let td2 = document.createElement("td")
        td2.innerText=ele.Id
        let td3 = document.createElement("td")
        td3.innerText=ele.Department
        let td4 = document.createElement("td")
        td4.innerText=ele.Exp
        let td5 = document.createElement("td")
        td5.innerText =ele.email
        let td6 = document.createElement("td")
        td6.innerText=ele.mobile
        let td7 =document.createElement("td")
        td7.innerText= ele.role
        let btn= document.createElement("button")
        btn.innerText="Delete"
       btn.addEventListener("click",function(){
            del(ind)
        })
       
        tr.append(td1,td2,td3,td4,td5,td6,td7,btn)
        document.querySelector("tbody").append(tr)
    })
   
   
}
function del(ind){
    arr.splice(ind,1)
    localStorage.setItem("Data",JSON.stringify(arr))
    formdata(arr)
   }

   document.getElementById("Filter").addEventListener("change",function(){
    filterdata(arr)
   })
   
   function filterdata(arr){
    let filterd=document.getElementById("Filter").value
    let update = arr.filter(function(ele){
        return filterd === ele.Department
    })
     formdata(update)
     console.log(update)
   }