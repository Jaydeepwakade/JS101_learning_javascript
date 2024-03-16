
let arr = []
let account =[]

function Account(acc, name, type, bal) {
   this.Accountnumber = acc;
   this.Name = name;
   this.accounttype = type;
   this.AccountBalance = parseFloat(bal);

}

let storedAccount= localStorage.getItem("details");
if(storedAccount){
   account= JSON.parse(storedAccount)
}

Account.prototype.deposit = function (amount) {
   amount = parseInt(document.getElementById("dep").value)

   if (amount > 0) {
      this.AccountBalance += amount
      document.getElementById("operation").textContent = `${amount} deposit succesfull updated bal ${this.AccountBalance}`
      localStorage.setItem("details", JSON.stringify(this))
   }
   else {
      console.log(`${amount} enter the valid`)
   }

}

Account.prototype.withdraw = function () {

}

document.getElementById("checkbal").addEventListener("click", function () {

   if (account) {
      document.getElementById("operation").textContent = `balance ${account.balance}`
   }
   else {
      alert("create an account first")
   }
})

document.getElementById("btn-depo").addEventListener("click", function () {

   amount = parseInt(document.getElementById("dep").value)
   account.deposit(amount)
   // JSON.parse(localStorage.getItem("deposit"))
   document.getElementById("dep").value = ""

})

// function getdata() {
//    document.querySelector("tbody").innerHTML = ""
//    arr.forEach((ele) => {
//       let account = ele.Accountnumber
//       let name = ele.Name
//       let accounttype = ele.accounttype
//       let AccountBalance = ele.AccountBalance
//       console.log(account, name, accounttype, AccountBalance)

//       // let trow = document.createElement("tr")
//       // let Accountnumber = document.createElement("td")
//       // Accountnumber.innerText = account
//       // let Name = document.createElement("td")
//       // Name.innerText = name
//       // let type = document.createElement("td")
//       // type.innerText = accounttype
//       // let balance = document.createElement("td")
//       // balance.innerText = AccountBalance
//       // trow.append(Accountnumber, Name, type, AccountBalance)
//       // let tbody = document.querySelector("tbody").append(trow)

//    })

// }

// function checkBal() {
//      document.getElementById("checkbal").innerText= 
// }
// checkBal()
// document.getElementById("checkbal").addEventListener("click", () => {
//    checkBal()
// })

// function deposit() {
//    let num = arr[arr.length - 1]

//    let newarr = dep + num.AccountBalance
//    console.log(newarr)
//    localStorage.setItem("deposit", JSON.stringify(newarr))
// }
//

document.getElementById("submit").addEventListener("click", function (event) {
   event.preventDefault()
   let accNum = document.getElementById("number").value
   let Name = document.getElementById("name").value
   let type = document.getElementById("type").value
   let balance = document.getElementById("balance").value
     Account = new Account(accNum, Name, type, balance)

   localStorage.setItem("details", JSON.stringify(account))
})