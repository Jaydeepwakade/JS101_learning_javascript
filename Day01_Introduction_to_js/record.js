// fill in javascript code here

document.getElementById("btn").addEventListener("click",function(){
    getData()
})
let arr =[]
function getData(){
   event.preventDefault()
    let Name = document.getElementById("name").value
     let Id = document.getElementById("employeeID").value
     let  Department= document.getElementById("department").value
     let Exp =document.getElementById("exp").value
     let email = document.getElementById("email").value
     let mobile =document.getElementById("mbl").value

     let obj={
        Name :Name,
        Id :Id,
        Department:Department,
        Exp:Exp,
        email:email,
        mobile:mobile

     }
     
     arr.push(obj)
     console.log(arr)
    formdata(arr)
}

function formdata(arr){
    document.querySelector("tbody").innerHTML=""
    arr.forEach(function(ele){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1= ele.Name
        let td2 = document.createElement("td")
        td2=ele.Id
        let td3 = document.createElement("td")
        td3=ele.Department
        let td4 = document.createElement("td")
        td4=ele.Exp
        let td5 = document.createElement("td")
        td5 =ele.email
        let td6 = document.createElement("td")
        td6=ele.mobile
        
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
   
}