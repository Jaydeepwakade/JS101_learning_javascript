

let arrofData= JSON.parse(localStorage.getItem("Bookmark-list"))
console.log(arrofData)

function adddata(arr){

    arr.forEach(ele => {
     let tr = document.createElement("tr")
    let Name =document.createElement("td")
    Name.textContent=ele.bookname

    let authorname= document.createElement("td")
    authorname.textContent=ele.authorname

    let deescription = document.createElement('td')
   deescription.textContent=ele.bookdescription

   let date = document.createElement("td")
   date.textContent=ele.date

   let category = document.createElement("td")
   category.textContent=ele.category

   tr.append(Name,authorname,deescription,date,category)
   document.querySelector("tbody").append(tr)
    });
  
}
adddata(arrofData)