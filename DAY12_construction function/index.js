

let arr =[]

 function Account(acc,name,type,bal){

    this.Accountnumber=acc;
    this.Name=name;
    this.accounttype=type;
    this.AccountBalance= parseFloat(bal);
 }
 function addData(){
     let accNum= document.getElementById("number").value
     let Name = document.getElementById("name").value
     let type = document.getElementById("type").value
     let balance = document.getElementById("balance").value
     let NewAccount= new Account(accNum,Name,type,balance)
     arr.push(NewAccount)
     console.log(arr)
 }


  
 document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()
     addData()
 })